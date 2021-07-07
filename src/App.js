import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";

import "./App.css";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
<<<<<<< HEAD
import AddPlants from "./components/AddPlant";
import Plant from "./components/Plant";

import PlantDescription from "./components/PlantDescription";
import MyJungle from "./components/MyJungle";

import PlantsGuide from "./components/PlantsGuide";
=======
import PlantsGuide from "./components/PlantsGuide";
import PlantDescription from "./components/PlantDescription";
import MyJungle from "./components/MyJungle";
import DeletarPlanta from "./components/DeletarPlanta";
import AddPlants from "./components/AddPlant";
import Plant from "./components/Plant";

>>>>>>> 9744b4994c5ad8425252566e1108de653b9bb492

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={HomePage} />
<<<<<<< HEAD
        <Route path="/add-planta" component={AddPlants} />
        <Route path="/my-jungle" component={Plant} />
        <Route path="/:categoria" component={PlantsGuide} />
        {/* <MyJungle /> */}
        {/* <PlantDescription /> */}
        <Route path="/guia-plantas/:descricao" component={PlantDescription} />
=======
        <Route exact path="/:categoria" component={PlantsGuide} />
        <Route path="/add-planta" component={AddPlants} />
        <Route path="/1-urban-jungle/:descricao" component={PlantDescription} />
        <Route path="/my-jungle" component={MyJungle} />
        {/* (Update) - CRUD */}
        {/* <Route path="/editar-planta/:id" component={PlantDescription} />
        {/* (Delete) - CRUD */}
        {/* <Route path="/apagar-planta/:id" component={DeletarPlanta} /> */}
>>>>>>> 9744b4994c5ad8425252566e1108de653b9bb492
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
