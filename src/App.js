import React from "react";
import Header from "./Components/Header/Header";
import Dashboard from "./Components/Dashboard/Dashboard";
import Wizard from "./Components/Wizard/Wizard";
import { HashRouter } from "react-router-dom";
import routes from "./routes"
import "./App.css";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header />
        { routes }
      </div>
    </HashRouter>
  );
}

export default App;
