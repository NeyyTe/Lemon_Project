import React from "react";
import "./header.css";


import { NavLink, Link} from "react-router-dom";
export default function Header() {
  return (
    <>
      <header className="header">
        <div>
          <Link to ="/"> <h1>Lemonflix</h1> </Link>
        </div>
        <nav className="nav_links">
            <ul>
                <li><NavLink to="/">Accueil</NavLink></li>
                <li><NavLink to="/films">Films</NavLink></li>
      
            </ul>
        </nav>
      </header>
    </>
  );
}
