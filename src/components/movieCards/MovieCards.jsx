import React from "react";
import "./movieCards.css";
import { Link } from "react-router-dom";
const MovieCards = ({ movie }) => {
  if (Array.isArray(movie.genres)) {
    movie.genres = movie.genres.join(", ");
  }

  return (
    <Link className="movieCardsLink" to={`/details/${movie.id}`}>
      <div key={movie.id} className="movieCardsContainer">
        <div className="topCard">
          <img
            src={
              movie.image
                ? movie.image.medium
                : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"
            }
            alt={movie.name}
          />
        </div>
        <div className="bottomCard">
          <p>{movie.name}</p>
          <hr />
          <p>
            ⭐{movie?.rating?.average} / {movie?.premiered}
          </p>
          <p>{movie?.genres}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCards;
