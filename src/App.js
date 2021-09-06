import Home from "./views/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
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
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/movie/:id" component={MovieDetails} />
          <Route path="/favorite" component={FavoriteList} />
          <Route path="/actor/:id" component={ActorDetails} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
