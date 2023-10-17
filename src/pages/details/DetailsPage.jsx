import React from "react";
import "./detailsPage.css";
import Header from "../../components/header/Header";
import { Helmet } from "react-helmet"; // Pour gérer dynamiquement les titres dans les onglets
// import MovieCards from "../../components/movieCards/MovieCards";

function DetailsPage() {
  return (
    <>
      <Header />
      <div>
        <Helmet>
          <title>Détails</title>
        </Helmet>
       
       <div>
       
       </div>
      </div>
    </>
  );
}

export default DetailsPage;
