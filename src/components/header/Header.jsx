import React, { useRef } from "react";
import "./header.css";
import { NavLink } from "react-router-dom";
// Icones Menu hamburger ( open & close )
import FormatAlignRightTwoToneIcon from "@mui/icons-material/FormatAlignRightTwoTone";
import CancelTwoToneIcon from "@mui/icons-material/CancelTwoTone";

//Import icones MUI pour nav_links
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone"; //Accueil
import MovieCreationIcon from "@mui/icons-material/MovieCreation"; // Movie

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <div>
        <NavLink to="/">
          <h1>Lemonflix</h1>
        </NavLink>
      </div>

      <nav ref={navRef}>
        <ul>
          <NavLink className="lemonflixHamburger" to="/">
            <h1>Lemonflix</h1>
          </NavLink>
          <li>
            <NavLink to="/">
              <span className="icons">
                <HomeTwoToneIcon fontSize="large" />
              </span>
              <span className="span_links">Accueil</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/films">
              <span className="icons">
                <MovieCreationIcon fontSize="large" />
              </span>
              <span className="span_links">Films</span>
            </NavLink>
          </li>
        </ul>

        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <CancelTwoToneIcon />
        </button>
      </nav>
      
      <button className="nav-btn" onClick={showNavbar}>
        <FormatAlignRightTwoToneIcon />
      </button>
    </header>
  );
}

export default Navbar;
