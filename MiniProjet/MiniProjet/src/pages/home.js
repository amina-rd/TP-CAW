import React from "react";
import "./main.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home">
      <img src="/image/iimg.jpg" />
      <br></br>
      <br></br>
      <h1>I am Student Stic, Welcome to my Home Page</h1>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h2>
        You can brows my page with the <Link to="/contact"> Contact</Link> or{" "}
        <Link to="/blog"> Blog </Link>links
      </h2>
    </div>
  );
};
export default Home;
