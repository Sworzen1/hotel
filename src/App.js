import React from 'react';
import './App.css';
import Nav from "./Nav"
import Baner from "./Baner"
import Rooms from "./Rooms"
import Information from "./Information"
import Restaurant from "./Restaurant"
import Contact from "./Contact"
import Footer from "./Footer"

function App() {
  return (
    <div className="App">
      <Nav />
      <Baner />
      <Rooms />
      <Information />
      <Restaurant />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
