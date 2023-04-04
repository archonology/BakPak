import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <h2>Pick a Tool</h2>
            <div className="flex-container">
                <Nav.Link as={Link} to={'/calculator'}>
                    <div className="tools">Calculator</div>
                </Nav.Link>
                <Nav.Link>
                    <div className="tools">Dictionary</div></Nav.Link>
                <Nav.Link>
                    <div className="tools">Notebook</div></Nav.Link>
                <Nav.Link>
                    <div className="tools">Sketchbook</div></Nav.Link>
                <Nav.Link>
                    <div className="tools">Unit Converter</div></Nav.Link>
                <Nav.Link>   <div className="tools">Weather</div></Nav.Link>
            </div>
        </>
    )
}

export default Home;