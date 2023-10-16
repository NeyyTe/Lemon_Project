import React, { useState, useEffect } from "react";
import "./filmsPage.css";
import Header from "../../components/header/Header";
import { Helmet } from "react-helmet"; // Pour gérer dynamiquement les titres dans les onglets
import Searchbar from "../../components/searchBar/Searchbar";
import { instance } from "../../api/axiosInstance";
// import axios from "axios";
import MovieCards from "../../components/movieCards/MovieCards";

export default function FilmsPage() {
  const [textSearchInput, setSearchInput] = useState("");
  const [shows, setShows] = useState([]);

  const getShows = () => {
    try {
      instance
        .get(`https://api.tvmaze.com/search/shows?q=${textSearchInput}&page=2`)
        .then((value) => {
          setShows(value.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  console.log(shows);

  useEffect(() => {
    getShows();
  }, [ textSearchInput]);

  return (
    <>
      <Header />
      <Searchbar
        textSearchInput={textSearchInput}
        setSearchInput={setSearchInput}
      />

      <div className="film_container">
        <Helmet>
          <title>Films</title>
        </Helmet>
        <h3 style={{ color: "white" }}> Resultats :</h3>

        <div className="shows">
          {shows.map((show) => {
            return <MovieCards key={show.show.id} movie={show.show} />;
          })}
        </div>
      </div>
    </>
  );
}
