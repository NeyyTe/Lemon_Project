import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import LandingPage from "./pages/landing/LandingPage";
import DetailsPage from "./pages/details/DetailsPage";
import MoviePage from "./pages/movie/MoviePage";
import MovieDetailPage from "./components/movieDetails/MovieDetails";
function App() {
  return(
<>

<BrowserRouter>
<Routes>
  <Route path="/" element={<LandingPage />}/>
  <Route path="/films" element={<MoviePage />}/>
  <Route path="/details" element={<DetailsPage />}/>
  <Route path="/details/:id" element={<MovieDetailPage />} />
</Routes>

</BrowserRouter>



</>
  )
 
  
}

export default App;
