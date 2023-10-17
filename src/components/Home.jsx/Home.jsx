import React, { useEffect, useState } from "react";
import "./home.css";
import cinemaMidjourneyWebp from "./images/cinemaMidjourneyWebp.webp";

// Imports des composants
import MovieCards from "../movieCards/MovieCards";
import SliderLayout from "../sliderLayout/SliderLayout";

import { Helmet } from "react-helmet"; // Pour gérer dynamiquement les titres dans les onglets

//Import Bibliotheque Slicker carousel
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [horrorMovies, setHorrorMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        //Appel API pour les mieux notés
        const response = await fetch("https://api.tvmaze.com/shows?q=rating");
        const result = await response.json();
        if (Array.isArray(result) && result.length > 0) {
          setTopRatedMovies(result);
        }

        //Appel API pour les films d'horreur
        const horrorResponse = await fetch("https://api.tvmaze.com/shows");
        const horrorResult = await horrorResponse.json();
        setHorrorMovies(horrorResult);
        // console.log(horrorResult, "Avant le tri \"horror")

        const horrorMoviesFiltered = horrorResult.filter((el) =>
        el.genres.includes("Horror")
      );   
      // console.log(horrorMoviesFiltered, "Apres le tri \"horror")

      horrorMoviesFiltered.sort((a, b) => {
       
        const dateA = new Date(a.premiered);
        const dateB = new Date(b.premiered);
        return dateB - dateA; // Tri par ordre décroissant par date de sortie
      });


      setHorrorMovies(horrorMoviesFiltered);
        // console.log(horrorResult,'HorrorResult')
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

  const movieFilter = [...topRatedMovies]; // Destructuring
  
  movieFilter.sort((a, b) => b.rating.average - a.rating.average); // Triage par ordre décroissant en fonction de la note

  const topRating = movieFilter.slice(0, 20); // Renvoie une copie du tableau d'origine, ici les 20 premiers
  
  return (
    <>
      {error && <p style={{ color: "red" }}>{errorMessage}</p>}

      <section className="container">
        <Helmet>
          <title>Accueil</title>
        </Helmet>
        <div className="grid_wrapper">
          <div className="left_txt">
            <h2>
              Regardez vos <br /> films préférés <br />
              entre <span>Lemoniens </span>!
            </h2>
          </div>
          <div className="right_img">
            <img src={cinemaMidjourneyWebp} alt="cinema_image" />
          </div>
        </div>

        <div className="slider_container">
          <h3>Les mieux notés</h3>
          <Slider {...SliderLayout}>
            {topRating.map((movie) => (
              <MovieCards key={movie.id} movie={movie} />
            ))}
          </Slider>
        </div>

        <div className="slider_container">
          <h3>Les derniers films d'horreur</h3>
          <Slider {...SliderLayout}>
            {horrorMovies.map((movie) => (
              <MovieCards key={movie.id} movie={movie} />
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Home;
