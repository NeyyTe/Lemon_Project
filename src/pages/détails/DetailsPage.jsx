import React from "react";
import "./detailsPage.css";
import Header from "../../components/header/Header";
import { Helmet } from "react-helmet"; // Pour gérer dynamiquement les titres dans les onglets

function DetailsPage() {
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

export default DetailsPage;
