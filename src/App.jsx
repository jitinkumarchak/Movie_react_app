import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Trending from "./Components/Trending";
import Popular from "./Components/Popular";
import Movie from "./Components/Templates/Movie";
import Tvshows from "./Components/Tvshows";
import People from "./Components/People";


function App() {
  return (
    <div className=' bg-[#1F1E24] w-screen h-screen flex'>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/trending" element={<Trending/>} />
        <Route path="/popular" element={<Popular/>} />
        <Route path="/movie" element={<Movie/>} />
        <Route path="/tv" element={<Tvshows/>} />
        <Route path="/person" element={<People/>} />
      
      </Routes>
      </div>
  )
}

export default App