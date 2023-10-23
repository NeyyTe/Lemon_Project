import React, { useState, useEffect } from "react";
import "./detailsPage.css";
import Header from "../../components/header/Header";
import { Helmet } from "react-helmet"; // Pour gérer dynamiquement les titres dans les onglets
import RenderHtml from "../../components/renderHtml/renderHtml";
import { useParams, Link } from "react-router-dom";
import { instance } from "../../api/axiosInstance";
function DetailsPage() {
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const fetchMovieDetails = async () => {
    try {
      instance
        .get(`https://api.tvmaze.com/shows/${id}?embed=cast`)
        .then((values) => {
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

  // if (loading) {
  //   return <p>Chargement en cours...</p>;
  if (loading) {
    return <div className="loader">
    <div className="bar" />
    <div className="bar" />
    <div className="bar" />
    <div className="bar" />
  </div>
  
  } else {
    return (
      <>
        <Helmet>
          <title>{movieDetails.name}</title>
        </Helmet>
        <Header />

        <section className="movieDetailsContainer">
          <div className="movieDetailsWrapper">
            <div className="movieDetails">
              <div className="movieDetailsLeft">
                <img
                  src={
                    movieDetails.image && movieDetails.image.medium
                      ? movieDetails.image.medium
                      : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png"
                  }
                  alt={movieDetails.name}
                />
              </div>
              <div className="movieDetailsRight">
                <div>
                  <h2>{movieDetails.name}</h2>
                  <span>⭐{movieDetails.rating.average || "Aucune note"}</span>
                </div>
                <div className="movieDetailsRightContent">
                  <RenderHtml htmlString={movieDetails.summary} />

                  <section className="showInfos">
                    <h3>Informations</h3>
                    <hr />
                    <div>
                      <p>
                        <b>Genres</b> :{" "}
                        {movieDetails.genres && movieDetails.genres.length
                          ? movieDetails.genres.join(" / ")
                          : " Non disponible"}
                      </p>
                      <p>
                        <b>Premiered</b> :{" "}
                        {movieDetails.premiered || " Non disponible"}
                      </p>
                      <p>
                        <b>Network </b> : {movieDetails.language} -{" "}
                        {movieDetails.network && movieDetails.network.country
                          ? movieDetails.network.country.name
                          : " Non disponible"}
                      </p>
                      <p>
                        <b>Schedull </b> : {movieDetails.schedule.days} at{" "}
                        {movieDetails.schedule.time} (
                        {movieDetails.averageRuntime}mn)
                      </p>
                      <p>
                        <b>Statut </b> :{" "}
                        {movieDetails.status || " Non disponible"}
                      </p>
                      <p>
                        <b>Official Website </b> :{" "}
                        {movieDetails.officialSite ? (
                          <Link to={movieDetails.officialSite}>
                            {movieDetails.officialSite}
                          </Link>
                        ) : (
                          " Non disponible"
                        )}
                      </p>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="secCast">
          <h1>Casting</h1>
          <div className="secCastGrid">
            {movieDetails._embedded.cast.map((actor) => (
              <div key={actor.person.id}>
                <img
                  src={actor.character.image &&  actor.character.image.medium 
                    ?actor.character.image.medium 
                    : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png"}
                  alt={actor.person.name}
                />
                
                <h2>{actor.person.name || " Non disponible"}</h2>
                <p>{actor.character.name || " Non disponible"}.</p>
              </div>
            ))}
          </div>
        </section>
      </>
    );
  }
}

export default DetailsPage;
