import './accueil.css';
import Header from '../../components/header/Header';

import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Accueil() {

  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [error, setError] = useState(null);


  const fetchData = async () => {
    try {
      const response = await fetch('https://api.tvmaze.com/shows?q=rating');
      if (!response.ok) {
        throw new Error('Réponse de l\'API non valide');
      }
      const result = await response.json();
      setTopRatedMovies(result);
    } catch (error) {
      setError(error);
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const display = topRatedMovies.slice(0, 20).map((movie) => (
    <div key={movie.id}>
      <img src={movie.image.medium} alt={movie.name} />
    </div>
  ));

  const settings = {
    className: "center",
   infinite:true,
  
    centerPadding: "60px",
    slidesToShow: 6,
    slidesToScroll: 6,
    speed: 500,
    arrows : true,

   responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  
  return (
    <>
      <Header />
      {error ? ( /*Condition ternaire pour gérer l'erreur au cas ou l'appel api échoue */
        <p>{error}</p>
      ) : (
        <>
          <div className='slider_container'>
            <h2>Les 20 films les mieux notés</h2>
                    <div>  <Slider {...settings}>
            {display}
            
            </Slider></div>
          </div>
        </>
      )}
    </>
  );
};
