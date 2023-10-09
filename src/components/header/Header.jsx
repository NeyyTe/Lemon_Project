import React from "react";
import "./header.css";
import Searchbar from '../../components/searchBar/Searchbar';

import { NavLink} from "react-router-dom";
export default function Header() {
  return (
    <>
      <header className="header">
        <h1>Lemon</h1>
        <nav className="nav_links">
            <ul>
                <li><NavLink to="/">Accueil</NavLink></li>
                <li><NavLink to="/films">Films</NavLink></li>
                <li><NavLink to="/details">Détails</NavLink></li>
        <Searchbar/>
            </ul>
        </nav>
      </header>
    </>
  );
}
