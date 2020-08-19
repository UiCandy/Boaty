import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "app/components/Wrapper";

import logo from "logo.svg";
import bg from "app/assets/photo.jpeg";
const Home = () => {
  return (
    <Wrapper backgroundImage={bg}>
      <header className="App-header">
        <img src={bg} className="App-logo" alt="logo" />
        <p>Welcome to Zizoo</p>
        <Link className="App-link" to="/search">
          Look for your next adventure!
        </Link>
      </header>
    </Wrapper>
  );
};

export default Home;
