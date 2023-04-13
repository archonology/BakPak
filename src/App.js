import React from 'react';
import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Landing from './Pages/Landing';
import Home from './Pages/Home'
import Header from './Components/Header';
import Calculate from './Pages/Calculator';
import Dictionary from './Pages/Dictionary';
import Footer from './Components/Footer';



function App() {
  return (
    <div>
      <Router>
        <div>
          <Header />
        </div>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route index element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path='/calculator' element={<Calculate />} />
          <Route path='/dictionary' element={<Dictionary />} />
          <Route path="*" element={<Landing />} />
        </Routes>
        <div>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
