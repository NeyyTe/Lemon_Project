import React, { useEffect, useState } from "react";
import "./home.css";
import cinema from "./images/cinema.png";

// Imports des composants
import MovieCards from "../movieCards/MovieCards";
import SliderLayout from "../sliderLayout/SliderLayout";

import { Helmet } from "react-helmet"; // Pour gérer dynamiquement les titres dans les onglets

//Import Bibliotheque Slicker carousel
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const [topRatedMovies, setTopRatedMovies] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {

         // Récupérez les films les mieux notés
        const response = await fetch("https://api.tvmaze.com/shows?q=rating");

        const result = await response.json();
        setTopRatedMovies(result);
        console.log(result)


        
      } catch (error) {
        setError(true);
        setErrorMessage(
          "Impossible de charger les films pour le moment. Veuillez réessayer plus tard."
        );
        console.error(
          "Impossible de charger les films pour le moment. Veuillez réessayer plus tard.",
          error
        );
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

  return (
    <>
      {/*Condition ternaire pour gérer l'erreur au cas ou l'appel api échoue */}
      {error ? <p>{errorMessage}</p> : ""}

      <section className="container">
        <Helmet>
          <title>Accueil</title>
        </Helmet>
        <div className="grid_wrapper">
          <div className="left_txt">
            <h2>
              Regardez vos <br/> films préférés <br/>entre <span>Lemoniens </span>!
            </h2>
          </div>
          <div className="right_img">
            <img src={cinema} alt="cinema_image" />
          </div>
        </div>

        <div className="slider_container">
          <h3>Les mieux notés</h3>{" "}
          <Slider {...SliderLayout}>
            {topRating.map((movie) => (
              <MovieCards key={movie.id} movie={movie}></MovieCards>
            ))}
          </Slider>
        </div>


        
      </section>
    </>
  );
}
