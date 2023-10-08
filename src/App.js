import React from 'react';
import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Landing from './Pages/Landing';
import Home from './Pages/Home'
import Header from './Components/Header';
import Calculate from './Pages/Calculator';
import Dictionary from './Pages/Dictionary';
import Notebook from './Pages/Notebook';
import Recorder from './Pages/Recorder';
import Weather from './Pages/Weather';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div>
      <Router>
        <div>
          <Header />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route index element={<Landing />} /> */}
          <Route path="/home" element={<Home />} />
          <Route path='/calculator' element={<Calculate />} />
          <Route path='/dictionary' element={<Dictionary />} />
          <Route path='/notebook' element={<Notebook />} />
          <Route path='/recorder' element={<Recorder />} />
          {/* <Route path='/weather' element={<Weather />} /> */}
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
