import React from "react";
import { Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/common/Header";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import PageNotFound from "./components/PageNotFound";
import ContactPage from "./components/contact/ContactUsPage";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
