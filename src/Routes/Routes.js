import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../components/Home";
import Detail from "../components/Detail";

const NoMatchPage = () => {
  return (
    <h6 style={{ textAlign: "center", marginTop: "200px" }}>404 - Not found</h6>
  );
};

const Routes = () => {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/detail/:id" component={Detail} />
      <Route component={NoMatchPage} />
      <Footer />
    </Router>
  );
};

export default Routes;
