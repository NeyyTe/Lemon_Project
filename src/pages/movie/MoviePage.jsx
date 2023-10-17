import React, { useState, useEffect } from "react";
import "./moviePage.css";
import Header from "../../components/header/Header";
import { Helmet } from "react-helmet"; // Pour gérer dynamiquement les titres dans les onglets
import Searchbar from "../../components/searchBar/Searchbar";
import { instance } from "../../api/axiosInstance";
// import axios from "axios";
import MovieCards from "../../components/movieCards/MovieCards";

export default function MoviePage() {
  const [textSearchInput, setSearchInput] = useState("");
  const [shows, setShows] = useState([]);
  const [listShows, setListShows] = useState([]);

  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState(false);

  // console.log(shows);

  useEffect(() => {
    const getShows = async () => {
      try {
        instance
          .get(
            `https://api.tvmaze.com/search/shows?q=${textSearchInput}&page=0`
          )
          .then((value) => {
            setShows(value.data);
          });

        const movieList = await fetch("https://api.tvmaze.com/shows");
        const movieListResult = await movieList.json();
        setListShows(movieListResult);

        movieListResult.sort((a, b) => {
          
          const dateA = new Date(a.premiered);
          const dateB = new Date(b.premiered);
          return dateB - dateA; // Tri par ordre décroissant
        });
      
        setListShows(movieListResult);
      } catch (error) {
        setError(true);
        setErrorMessage(
          "Impossible de charger les films pour le moment. Veuillez réessayer plus tard."
        );
        console.log(error);
      }
    };

    getShows();
  }, [textSearchInput]);

const recentMovies = listShows.slice(0, 20);

  return (
    <>
      <Header />
      <Searchbar
        textSearchInput={textSearchInput}
        setSearchInput={setSearchInput}
      />
      {error && <p style={{ color: "red" }}>{errorMessage}</p>}
      <div className="film_container">
        <Helmet>
          <title>Films</title>
        </Helmet>
        {/* <h3 style={{ color: "white" }}> Resultats :</h3> */}

        <div className="shows">
          {shows.map((show) => {
            return <MovieCards key={show.show.id} movie={show.show} />;
          })}
        </div>

        <div >
          <div>
            <h3>Les plus récents</h3>
          </div>
          
            <div className="mostRecentMovies">
              {recentMovies.map((movie) => {
                return <MovieCards key={movie.id} movie={movie} />;
              })}
            </div>
         
        </div>
        
      </div>
    </>
  );
}
