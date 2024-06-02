import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Trending from "./Components/Trending";
import Popular from "./Components/Popular";
import Movie from "./Components/Templates/Movie";
import Tvshows from "./Components/Tvshows";
import People from "./Components/People";
import Moviedetails from "./Components/Moviedetails";
import PersonDetails from "./Components/PersonDetails";
import TvDetails from "./Components/TvDetails";
import Trailer from "./Components/Templates/Trailer";
import Notfound from "./Components/Notfound";
import About from "./Components/About";

function App() {
  return (
    <div className=" bg-[#1F1E24] w-screen h-screen flex">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/movie/details/:id" element={<Moviedetails />}>
          <Route path="/movie/details/:id/trailer" element={<Trailer />} />
        </Route>
        <Route path="/tv" element={<Tvshows />} />
        <Route path="/tv/details/:id" element={<TvDetails />}>
          <Route path="/tv/details/:id/trailer" element={<Trailer />} />
        </Route>
        <Route path="/person" element={<People />} />
        <Route path="/person/details/:id" element={<PersonDetails />} />
        <Route path="/About" element={<About />} />
      </Routes>

    </div>
  );
}

export default App;
