import React from 'react';
import './App.css';
import Nav from "./Nav"
import Baner from "./Baner"
import Rooms from "./Rooms"
import Information from "./Information"

function App() {
  return (
    <div className="App">
      <Nav />
      <Baner />
      <Rooms />
      <Information />
    </div>
  );
}

export default App;
