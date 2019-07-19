import React from 'react';
import Header from './Components/Header/Header'
import Dashboard from './Components/Dashboard/Dashboard'
import Wizard from './Components/Wizard/Wizard'
import './App.css';

function App() {
  return (
    <div className="App">
      <Dashboard />
      <Wizard />
      <Header />
    </div>
  );
}

export default App;
