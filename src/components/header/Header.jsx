// import React,{  useState, useRef ,useEffect} from "react";
// import "./header.css";
// //Import icones MUI pour nav_links
// import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone"; //Accueil
// import MovieCreationIcon from '@mui/icons-material/MovieCreation'; // Movie
// // Icones Meunu hamburger ( open & close )
// import FormatAlignRightTwoToneIcon from "@mui/icons-material/FormatAlignRightTwoTone";
// import CancelTwoToneIcon from "@mui/icons-material/CancelTwoTone";

// import { Squeeze as Hamburger } from 'hamburger-react'

// import { NavLink } from "react-router-dom";
// export default function Header() {
// // const[showLinks, setShowLinks]=useState(false)

// // const handleShowLinks =() => setShowLinks(!showLinks)
// // console.log(showLinks)

// const navRef = useRef();

// 	const showNavbar = () => {
// 		navRef.current.classList.toggle(
// 			"responsive_nav"
// 		);
// 	};
// const [isOpen, setOpen] = useState(false)
// console.log(isOpen)
//   return (
//     <>
//       <header className="header ">
//         <div>
//           <NavLink to="/">

//             <h1>Lemonflix</h1>
//           </NavLink>
//         </div>
//         <nav ref={navRef} className="nav_links">
//           <ul>
//             <li>
//               <NavLink to="/">
//                 <span className="icons">
//                   <HomeTwoToneIcon fontSize="large" />
//                 </span>
//                 <span aria-label="Close" className="span_links">Accueil</span>
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/films">
//                 <span className="icons">
//                   <MovieCreationIcon fontSize="large"/>
//                 </span>
//                 <span className="span_links">Films</span>
//                 </NavLink>
//             </li>
//           </ul>

//         </nav>

//         <div onClick={showNavbar}className="hamburgerIcon">
//           <Hamburger toggled={isOpen} toggle={setOpen} color ="#fff"/>
//         </div>
//       </header>
//     </>
//   );
// }

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
