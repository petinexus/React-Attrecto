import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
  NavLink
} from "react-router-dom";
import Movies from "../pages/Movies";
import Sandbox from "../pages/Sandbox";
import { MOVIES } from "../data/movies";


export default function Navbar() {
  return (
    <Router>
      <div className='container'>
        <nav>
          <ul className="nav nav-pills">
            <li className="nav-item">
              <NavLink className="nav-link" to="/movies" activeClassName="nav-link active">Movies</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/sandbox" activeClassName="nav-link active">Sandbox</NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/sandbox">
            <Sandbox />
          </Route>
          <Route path="/movies">
            <Movies movies={MOVIES} />
          </Route>
          <Route exact path="/">
            <Redirect to="/movies" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}