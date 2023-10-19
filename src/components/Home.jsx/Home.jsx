import React, { useEffect, useState } from "react";
import "./home.css";
import cinemaMidjourneyWebp from "./images/cinemaMidjourneyWebp.webp";
import axios from "axios";

// Imports des composants
import MovieCards from "../movieCards/MovieCards";
import SliderLayout from "../sliderLayout/SliderLayout";

// Pour gérer dynamiquement les titres dans les onglets
import { Helmet } from "react-helmet"; 

//Import Bibliothèque Slicker carousel
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/**
 * The Home component fetches data from two different APIs and displays the top-rated movies and the latest horror movies in a slider layout.
 */
const Home = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [horrorMovies, setHorrorMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState(null);

  
   

    const fetchData = async () => {
      try {
        //Appel API pour les mieux notés
        const response = await axios.get("https://api.tvmaze.com/shows?q=rating");
        const result = response.data;
        if (Array.isArray(result) && result.length > 0) {
          setTopRatedMovies(result);
        }

        //Appel API pour les films d'horreur
        const horrorResponse = await axios.get("https://api.tvmaze.com/shows");
        const horrorResult = horrorResponse.data;
        setHorrorMovies(horrorResult);

        const horrorMoviesFiltered = horrorResult.filter((el) =>
          el.genres.includes("Horror")
        );

        // Tri par ordre décroissant et date de sortie
        horrorMoviesFiltered.sort((a, b) => {
          const dateA = new Date(a.premiered);
          const dateB = new Date(b.premiered);
          return dateB - dateA;
        });
        setHorrorMovies(horrorMoviesFiltered);
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
    useEffect(() => {
    fetchData();
  }, []);

  const topRating = [...topRatedMovies] // Destructuring
    .sort((a, b) => b.rating.average - a.rating.average) // Triage par ordre décroissant en fonction de la note
    .slice(0, 20); //Renvoie une copie du tableau d'origine, ici les 20 premiers

  return (
    <>
      {error && <p className="errorMessage">{errorMessage}</p>}

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
            <img 
           
            src={cinemaMidjourneyWebp} alt="cinema_image" />
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
