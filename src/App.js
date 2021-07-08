import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";

import "./App.css";
import HomePage from "./components/HomePage";
import PlantsGuide from "./components/PlantsGuide";
import PlantDescription from "./components/PlantDescription";
import MyJungle from "./components/MyJungle";
import DeletarPlanta from "./components/DeletarPlanta";
import AddPlants from "./components/AddPlant";
import Plant from "./components/Plant";
import EditPlanta from "./components/EditPlanta";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/guia/:categoria" component={PlantsGuide} />
        <Route path="/descricao/:descricao" component={PlantDescription} />
        <Route path="/my-jungle" component={MyJungle} />
        <Route path="/planta/:id" component={Plant} />

        {/* (Create) - CRUD */}
        <Route path="/add-planta" component={AddPlants} />
        {/* (Update) - CRUD */}
        <Route path="/editar-planta/:id" component={EditPlanta} />
        {/* (Delete) - CRUD */}
        <Route path="/apagar-planta/:id" component={DeletarPlanta} />

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
