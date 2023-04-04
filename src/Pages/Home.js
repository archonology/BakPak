import React from "react";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <h2>Pick a Tool</h2>
            <div className="flex-container">
                <div className="tools">Calculator</div>
                <div className="tools">Dictionary</div>
                <div className="tools">Notebook</div>
                <div className="tools">Sketchbook</div>
                <div className="tools">Unit Converter</div>
                <div className="tools">Weather</div>
            </div>
        </>
    )
}

export default Home;