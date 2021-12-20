import Home from "./views/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import MovieDetails from "./views/MovieDetails";
import NotFound from "./components/NotFound/NotFound";
import FavoriteList from "./views/FavoriteList";
import Footer from "./components/Footer/Footer";
import ActorDetails from "./views/ActorDetails";

import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/favorite" element={<FavoriteList />} />
          <Route path="/actor/:id" element={<ActorDetails />} />
          <Route element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
