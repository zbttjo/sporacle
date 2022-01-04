import "./App.css";
import "./css/Top.css";
import "./css/Home.css";
import "./css/Matches.css";
import SideMenu, { menuItems } from "./components/SideMenu";
import Header from "./components/Header";
import Home from "./components/Home";
import Matches from "./components/Matches";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";



function App() {
  const [inactive, setInactive] = useState(true);

  return (
    <div className="App">
      <Router>
        <SideMenu
          onCollapse={(inactive) => {
            console.log(inactive);
            setInactive(inactive);
          }}
        />

        <div className={`container ${inactive ? "inactive" : ""}`}>
          {menuItems.map((menu, index) => (
            <>
            </>
          ))}
          {/*Switch for redirect menu path*/ }
          { <Switch>
            <Route exact path={"/"}>
              <Header />
              <Home />
            </Route>
            <Route exact path={"/matches"}>
              <Header />
              <Matches />
            </Route>
            <Route path={"/matches/live"}>
              <Header />
              <h1>Hello</h1>
            </Route>
            <Route path={"/matches/coming"}>
              <Header />
              <h1>Coming</h1>
            </Route>
            <Route exact path={"/statistique"}>
              <Header />
              <h1>Statistique</h1>
            </Route>
            <Route path={"/statistique/teams"}>
              <Header />
              <h1>Teams</h1>
            </Route>
            <Route path={"/statistique/players"}>
              <Header />
              <h1>Players</h1>
            </Route>
            <Route exact path={"/news"}>
              <Header />
              <h1>News</h1>
            </Route>
          </Switch> }
        </div>
      </Router>
    </div>
  );
}

export default App;