import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import LandingPage from "./pages/landing/LandingPage";
import DetailsPage from "./pages/details/DetailsPage";
import MoviePage from "./pages/movie/MoviePage";
function App() {
  return(
<>

<BrowserRouter>
<Routes>
  <Route path="/" element={<LandingPage />}/>
  <Route path="/films" element={<MoviePage />}/>
  <Route path="/details/:id" element={<DetailsPage />}/>
</Routes>

</BrowserRouter>



</>
  )
 
  
}

export default App;
