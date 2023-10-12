import React from "react";
import "./films.css";
import Header from "../../components/header/Header";
import { Helmet } from "react-helmet"; // Pour gérer dynamiquement les titres dans les onglets

export default function Films() {
  return (
    <>
      <Header />
      <div>
        <Helmet>
          <title>Films</title>
        </Helmet>
        Films
      </div>
    </>
  );
}
