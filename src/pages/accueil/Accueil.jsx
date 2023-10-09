
import './accueil.css';
import Header from '../../components/header/Header';


import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios'; 

export default function Accueil() {
  
  const [topRatedMovies, setTopRatedMovies] = useState([]); 

  useEffect(() => {
    
    axios.get('https://api.tvmaze.com/schedule/full')
      .then(response => {
   
        setTopRatedMovies(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des films les mieux notés :', error);
      });
  }, []);

  const settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
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
    <Header/>
      <h2>Les 20 films les mieux notés</h2>
      <Slider {...settings}>
        {topRatedMovies.map(movie => (
      
          <div key={movie.id}>
            <img src={movie.image} alt={movie.name} />
            <h3>{movie.name}</h3>
          </div>
        ))}
      </Slider>

      {


      }
    </>
  );
};

