import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";

import "./App.css";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
<<<<<<< HEAD
<<<<<<< HEAD
import AddPlants from "./components/AddPlant";
import Plant from "./components/Plant";
=======
import PlantDescription from "./components/PlantDescription";
import MyJungle from "./components/MyJungle";
>>>>>>> dcf89707e7849dca3005174dc3e223c93e875bb0
=======

import PlantsGuide from "./components/PlantsGuide";

import AddPlants from "./components/AddPlant";
import Plant from "./components/Plant";
import PlantDescription from "./components/PlantDescription";
import MyJungle from "./components/MyJungle";


>>>>>>> 92e9ea410c5ff4a2aae1ba2578b8a0b06195ba37

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
<<<<<<< HEAD
<<<<<<< HEAD
        <Route exact path="/" component={HomePage} />
        <Route path="/add-planta" component={AddPlants} />
        <Route path="/my-jungle" component={Plant} />
=======
=======

        <Route exact path="/" component={HomePage} />
        <Route path="/:categoria" component={PlantsGuide} />


        <Route path="/add-planta" component={AddPlants} />
>>>>>>> 92e9ea410c5ff4a2aae1ba2578b8a0b06195ba37
        {/* <MyJungle /> */}
        {/* <PlantDescription /> */}
        <Route exact path="/" component={HomePage} />
        <Route path="/guia-plantas/:descricao" component={PlantDescription} />
        <Route path="/my-jungle" component={MyJungle} />
<<<<<<< HEAD
>>>>>>> dcf89707e7849dca3005174dc3e223c93e875bb0
=======

>>>>>>> 92e9ea410c5ff4a2aae1ba2578b8a0b06195ba37
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
