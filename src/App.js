import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";

import "./App.css";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import AddPlants from "./components/AddPlant";
import Plant from "./components/Plant";

import PlantDescription from "./components/PlantDescription";
import MyJungle from "./components/MyJungle";

import PlantsGuide from "./components/PlantsGuide";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={HomePage} />
        <Route path="/add-planta" component={AddPlants} />
        <Route path="/my-jungle" component={Plant} />
        <Route path="/:categoria" component={PlantsGuide} />
        {/* <MyJungle /> */}
        {/* <PlantDescription /> */}
        <Route path="/guia-plantas/:descricao" component={PlantDescription} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
