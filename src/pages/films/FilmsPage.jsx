import React from "react";
import "./filmsPage.css";
import Header from "../../components/header/Header";
import { Helmet } from "react-helmet"; // Pour gérer dynamiquement les titres dans les onglets
import Searchbar from '../../components/searchBar/Searchbar';



export default function FilmsPage() {
  return (
    <>
      <Header /> 
      <Searchbar/>
  
      <div>
        <Helmet>
          <title>Films</title>
        </Helmet>
        Films
      </div>
    </>
  );
}
