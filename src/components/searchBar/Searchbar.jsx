import React, {useState} from "react";
import "./searchBar.css";

const SearchBar= () => {
    const [searchName, setSearchName] = useState("");
;

const searchBtn =(e) => {
    e.preventDefault(); // Pour empêcher le rechargement de la page
    console.log("Recherche de" + searchName)
}
  return (
    <div className="search_bar">
      <form action="" className="form">
        <input type="text"
        placeholder="Taper votre film... "
        value = {searchName}
        onChange={(e) =>{setSearchName(e.target.value)}}
        
        />

        <button className="input_button" onClick={searchBtn}>Rechercher</button>
        
        
        
      </form>
    </div>
  );
}
;


export default SearchBar;