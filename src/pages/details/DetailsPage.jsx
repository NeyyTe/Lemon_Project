import React from "react";
import "./detailsPage.css";
import Header from "../../components/header/Header";
import { Helmet } from "react-helmet"; // Pour gérer dynamiquement les titres dans les onglets
// import MovieCards from "../../components/movieCards/MovieCards";
// import MovieDetails from "../../components/movieDetails/MovieDetails";
function DetailsPage(props) {
  return (
    <>
      <Header />
      <>
        <Helmet>
          <title>Détails</title>
        </Helmet>
        
       
      </>
    </>
  );
}

export default DetailsPage;
