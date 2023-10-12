import "./accueil.css";
import Header from "../../components/header/Header";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Helmet } from "react-helmet"; // Pour gérer dynamiquement les titres dans les onglets

export default function Accueil() {
  const [topRatedMovies, setTopRatedMovies] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.tvmaze.com/shows?q=rating");
        
        const result = await response.json();
        setTopRatedMovies(result);

      } catch (error) {
        setError(true);
        setErrorMessage("Impossible de charger les films pour le moment. Veuillez réessayer plus tard.")
        console.error("Impossible de charger les films pour le moment. Veuillez réessayer plus tard.", error);
      }
    };

    fetchData();
  }, []);


  const movieFilter = [...topRatedMovies];

  movieFilter.sort((a, b) => {
    return b["rating"]["average"] - a["rating"]["average"];
  });


  const topRating = [];
  for (let i = 0; i < movieFilter.length; i++) {
    if (i <= 20) {
      topRating.push(movieFilter[i]);
    }
  }
  
  const display = topRating.map((movie) => {
    return (
      <>
        <div key={movie.id} className="movie_cards_container">
          <img src={movie.image.medium}
          alt= {movie.name} />
          <p>{movie.name + movie.rating.average}</p>
        </div>
      </>
    );
  });
  
  

  // Settings du Slick Slider
  const settings = {
    className: "center",
    infinite: true, // Boucle infinie du slider
    lazyLoad: "ondemand", // LazyLoading des images dans le slider

    slidesToShow: 7, // Nombres d'éléments affiché
    slidesToScroll: 7, // Nombres d'éléments affiché lors d'un scroll avec les flèches ou drag a la souris
    speed: 800, // Vitesse de transition ( en ms )
    arrows: true, // Affichage des fléches de navigation

    responsive: [ // Responsivité du slider
      {
        breakpoint: 1610,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1158,
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
      {/*Condition ternaire pour gérer l'erreur au cas ou l'appel api échoue */}
      {error  ? (
        <p>{errorMessage}</p>
      ) : ""}
        <>
          <div className="slider_wrapper">
            <div className="slider_container">
              <Helmet>
                <title>Accueil</title>
              </Helmet>
                <h2>Les 20 films les mieux notés</h2>{" "}
                  <Slider {...settings}>{display}</Slider>
            </div>
          </div>
        </>
      
    </>
  );
}
