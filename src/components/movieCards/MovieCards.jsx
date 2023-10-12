import React from "react";
import "./movieCards.css";

const MovieCards = ({ movie }) => {
  return (
    <div key={movie.id} className="movie_cards_container">
      <img src={movie.image.medium} alt={movie.name} />
      <div className="bottom_card">
        <p>{movie.name}</p>
        <hr />
        <p>⭐{movie.rating.average}</p>
      </div>
    </div>
  );
};

export default MovieCards;
