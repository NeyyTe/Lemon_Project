import React from "react";
import './movieCards.css'

const MovieCards = ({ movie }) => {
  return (
    <div key={movie.id} className="movie_cards_container">
      <img src={movie.image.medium} alt={movie.name} />
      <p>
        {movie.name} {movie.rating.average}
      </p>
    </div>
  );
};

export default MovieCards;
