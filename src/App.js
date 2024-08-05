import React from "react";

import Header from "./components/Header/Header";
import Body from "./components/Body/Body";

import "./App.css";
import MainRoute from "./routes/MainRoute";


function App() {
  return (
    <div className="App">
      {/* <Header />
      <Body /> */}
     <MainRoute />
    </div>
  );
}

export default App;
