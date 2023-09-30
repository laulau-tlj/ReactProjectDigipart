import './App.css';
import {Route, Routes, BrowserRouter as Router} from "react-router-dom";
import React from 'react';
import Navbar from './Component/Navbar';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
