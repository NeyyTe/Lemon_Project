import React from "react";
import "./movieCards.css";

const MovieCards = ({ movie }) => {
  if (Array.isArray(movie.genres)) {
    movie.genres = movie.genres.join(", ");
  }

  return (
    <div key={movie.id} className="movie_cards_container">
      <div >
        <img
          src={
            movie.image
              ? movie.image.medium
              : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"
          }
          alt={movie.name}
        />
      </div>
      <div className="bottom_card">
        <p>{movie.name}</p>
        <hr />
        <p>
          ⭐{movie?.rating?.average } / {movie?.premiered}
        </p>
        <p>{movie?.genres}</p>

      </div>
    </div>
  );
};

export default MovieCards;
