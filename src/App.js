import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'


import AccueilPage from "./pages/accueil/AccueilPage";
import DetailsPage from "./pages/détails/DetailsPage";
import FilmsPage from "./pages/films/FilmsPage";

function App() {
  return(
<>

<BrowserRouter>
<Routes>
  <Route path="/" element={<AccueilPage />}/>
  <Route path="/films" element={<FilmsPage />}/>
  <Route path="/details" element={<DetailsPage />}/>
</Routes>

</BrowserRouter>



</>
  )
 
  
}

export default App;
