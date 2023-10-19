import React, { useState, useEffect } from "react";
import "./moviePage.css";

//Import des composants
import Header from "../../components/header/Header";
import MovieCards from "../../components/movieCards/MovieCards";
import Searchbar from "../../components/searchBar/Searchbar";
import { instance } from "../../api/axiosInstance";

import { Helmet } from "react-helmet"; // Pour gérer dynamiquement les titres dans les onglets

export default function MoviePage() {
  const [textSearchInput, setSearchInput] = useState("");
  const [shows, setShows] = useState([]);
  const [listShows, setListShows] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState(false);
  const [visibleMovies, setVisibleMovies] = useState(20); // Par défaut, affiche 20 films

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
          "Impossible de charger les films pour le moment. Veuillez réessayer."
        );
        console.log(error);
      }
    };

    getShows();
  }, [textSearchInput]);

  const recentMovies = listShows.slice(0, visibleMovies);

  const loadMoreMovies = () => {
    setVisibleMovies((prevVisibleMovies) => prevVisibleMovies + 20);
  };

  return (
    <>
      <Header />
      <Searchbar
        textSearchInput={textSearchInput}
        setSearchInput={setSearchInput}
      />
      {error && <p className="errorMessage">{errorMessage}</p>}
      <div className="film_container">
        <Helmet>
          <title>Films</title>
        </Helmet>

        <div className="shows">
          {shows.map((show) => {
            return <MovieCards key={show.show.id} movie={show.show} />;
          })}
        </div>

        <div>
          <div>
            <h3>Les plus récents</h3>
          </div>
          <div className="mostRecentMovies">
            {recentMovies.map((movie) => {
              return <MovieCards key={movie.id} movie={movie} />;
            })}
          </div>
          {visibleMovies < listShows.length && (
            <button className="buttonLoadMore" onClick={loadMoreMovies}>
              Charger plus
            </button>
          )}
        </div>
      </div>
    </>
  );
}
