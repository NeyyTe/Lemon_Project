import React,{useEffect} from "react";
import "./header.css";
//Import icones MUI pour nav_links
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone"; //Accueil
import MovieCreationIcon from '@mui/icons-material/MovieCreation'; // Movie
// Icones Meunu hamburger ( open & close )
import FormatAlignRightTwoToneIcon from "@mui/icons-material/FormatAlignRightTwoTone";
import CancelTwoToneIcon from "@mui/icons-material/CancelTwoTone";

import { NavLink } from "react-router-dom";
export default function Header() {


  useEffect(() => {
   
  }, []);

  return (
    <>
      <header className="header">
        <div>
          <NavLink to="/">
            
            <h1>Lemonflix</h1>
          </NavLink>
        </div>
        <nav className="nav_links">
          <ul>
            <li>
              <NavLink to="/">
                <span className="icons">
                  <HomeTwoToneIcon fontSize="large" />
                </span>
                <span aria-label="Close" className="span_links">Accueil</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/films">
                <span className="icons">
                  <MovieCreationIcon fontSize="large"/>
                </span>
                <span className="span_links">Films</span>
                </NavLink>
            </li>
          </ul>

          <div className="menu">
            <span className="hamburger active">
              <FormatAlignRightTwoToneIcon fontSize="large" />
            </span>
            <span className="close">
              <CancelTwoToneIcon fontSize="large" />
            </span>
          </div>

        </nav>
      </header>
    </>
  );
}
