import React from "react";
import "./details.css";
import Header from "../../components/header/Header";
import { Helmet } from "react-helmet"; // Pour gérer dynamiquement les titres dans les onglets

function Details() {
  return (
    <>
      <Header />
      <div>
        <Helmet>
          <title>Détails</title>
        </Helmet>
        Details
      </div>
    </>
  );
}

export default Details;
