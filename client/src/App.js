import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/homePage";
import Saved from "./pages/savedPage";
import NotFound from "./pages/notFound";
import Nav from "./components/nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/saved" component={Saved} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
