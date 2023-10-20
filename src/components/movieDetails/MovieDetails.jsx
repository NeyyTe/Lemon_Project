import React, { useState, useEffect } from "react";
import "./movieDetails.css";
import { useParams } from "react-router-dom";
import { instance } from "../../api/axiosInstance";
const MovieDetails = (props) => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const fetchMovieDetails = async () => {
    try {
      instance.get(`https://api.tvmaze.com/shows/${id}`).then((values) => {
        setMovieDetails(values.data);
        setLoading(false);
      });
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des détails du film : ",
        error
      );
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovieDetails();
  }, []);

  if (loading) {
    return <p>Chargement en cours...</p>;
  } else {
    return (
      <div className="movie-details">
        <h2>{movieDetails.name}</h2>
        <p>{movieDetails.summary}</p>
        <img src={movieDetails.image.medium} alt={movieDetails.name} />
      <p>{movieDetails.summary}</p>
      <p>Genres : {movieDetails.genres.join(", ")}</p>
      <p>Date de première : {movieDetails.premiered}</p>
      </div>
    );
  }
};

export default MovieDetails;
