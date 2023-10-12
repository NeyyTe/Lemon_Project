import "./accueil.css";
import Header from "../../components/header/Header";
import MovieCards from "../../components/movieCards/MovieCards";
import SliderLayout from "../../components/sliderLayout/SliderLayout";

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
      <Header />
      {/*Condition ternaire pour gérer l'erreur au cas ou l'appel api échoue */}
      {error ? <p>{errorMessage}</p> : ""}
      <>
        <div>
          <Helmet>
            <title>Accueil</title>
          </Helmet>

          <div className="slider_container">
            <h2>Les 20 films les mieux notés</h2>{" "}
            
            <Slider {...SliderLayout}>
              {topRating.map((movie) => (
                <MovieCards key={movie.id} movie={movie}></MovieCards>
              ))}
            </Slider>
          </div>
        </div>
      </>
    </>
  );
}
