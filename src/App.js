import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";

import "./App.css";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import PlantsGuide from "./components/PlantsGuide";
import PlantDescription from "./components/PlantDescription";
import MyJungle from "./components/MyJungle";
import DeletarPlanta from "./components/DeletarPlanta";
import AddPlants from "./components/AddPlant";
import Plant from "./components/Plant";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/guia/:categoria" component={PlantsGuide} />

        {/* (Create) - CRUD */}
        <Route path="/add-planta" component={AddPlants} />
        <Route path="/descricao/:descricao" component={PlantDescription} />
        <Route path="/my-jungle" component={MyJungle} />
        {/* (Update) - CRUD */}
        <Route path="/editar-planta/:id" component={PlantDescription} />
        {/* (Delete) - CRUD */}
        <Route path="/apagar-planta/:id" component={DeletarPlanta} />
        <Route path="/planta/:id" component={Plant} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
