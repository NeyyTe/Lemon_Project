import React, { useState, useEffect } from "react";
import './movieDetails.css'
const MovieDetails = (props) => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        // Récupére l'identifiant du film depuis les paramètres d'URL
        const movieId = props.match.params.id;

        // Fait une requête pour obtenir les détails du film en fonction de l'identifiant
        const response = await fetch(`https://api.tvmaze.com/shows/${movieId}`);
        const data = await response.json();

        setMovieDetails(data);
        setLoading(false);
      } catch (error) {
        console.error("Erreur lors de la récupération des détails du film : ", error);
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [props.match.params.id]);

  if (loading) {
    return <p>Chargement en cours...</p>;
  }

  if (!movieDetails) {
    return <p>Les détails du film ne sont pas disponibles.</p>;
  }

  return (
    <div className="movie-details">
      <h2>{movieDetails.name}</h2>
      <img src={movieDetails.image.medium} alt={movieDetails.name} />
      <p>{movieDetails.summary}</p>
      <p>Genres : {movieDetails.genres.join(", ")}</p>
      <p>Date de première : {movieDetails.premiered}</p>
      {/* Ajoutez d'autres détails du film selon vos besoins */}
    </div>
  );
};

export default MovieDetails;
