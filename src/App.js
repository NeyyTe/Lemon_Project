import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Accueil from "./pages/accueil/Accueil";
import Films from "./pages/films/Films";
import Details from "./pages/détails/Details";

function App() {
  return(
<>

<BrowserRouter>
<Routes>
  <Route path="/" element={<Accueil />}/>
  <Route path="/films" element={<Films />}/>
  <Route path="/details" element={<Details />}/>
</Routes>

</BrowserRouter>



</>
  )
 
  
}

export default App;
