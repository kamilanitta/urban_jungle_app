import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";

import "./App.css";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import PlantDescription from "./components/PlantDescription";
import MyJungle from "./components/MyJungle";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        {/* <MyJungle /> */}
        {/* <PlantDescription /> */}
        <Route exact path="/" component={HomePage} />
        <Route path="/guia-plantas/:descricao" component={PlantDescription} />
        <Route path="/my-jungle" component={MyJungle} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
