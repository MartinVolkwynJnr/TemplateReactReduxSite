import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="jumbotron">
    <h1>Welcome</h1>
    <p>
      "Do not fear for i am with you, do not be dismaid for i am with you..."
    </p>
    <Link to="about" className="btn btn-primary btn-lg">
      Testing SonarCloud
    </Link>
  </div>
);

export default HomePage;
