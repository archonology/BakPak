import React from 'react';
import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Landing from './Pages/Landing';
import Home from './Pages/Home'
import Header from './Components/Header';
import Calculator from './Pages/Calculator';
import Footer from './Components/Footer';


function App() {
  return (
    <div>
      <Router>
        <div>
          <Header/>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="/landing" element={<Landing />} />
          <Route path='/calculator' element={<Calculator/>} />
          <Route path="*" element={<Home />} />
        </Routes>
        <div>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
