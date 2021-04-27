import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Nav from "./components/Nav";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import useWindowDimensions from "./utils/useWindowDimensions";
import './App.scss';
// import MobileNav from "./components/MobileNav";

const App = () => {
  const { width } = useWindowDimensions();

  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
      </Switch>
    </Router>
  );
};

export default App;
