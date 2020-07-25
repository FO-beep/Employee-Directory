import React from "react";
// import axios from "axios";
import Home from "./components/Home";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header />
        <Home />
      </Wrapper>
    </div>
  );
}

export default App;
