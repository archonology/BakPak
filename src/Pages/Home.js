import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';
import calcPic from '../images/calcPic.png'

const Home = () => {
    return (
        <>
            <h2>Pick a Tool</h2>
            <div className="container">
                <div className="row">
                <Nav.Link
                    as={Link}
                        to={'/calculator'}
                        className="col-md-12"
                >
                    <img
                        src={calcPic}
                        alt={'calculator'}
                        className="tools"
                    ></img>
                    </Nav.Link>
                    
                    <Nav.Link
                        as={Link}
                        to={'/calculator'}
                        className="col-md-12"
                    >
                        <img
                            src={calcPic}
                            alt={'calculator'}
                            className="tools"
                        ></img>
                    </Nav.Link>

                    

                </div>
            </div>
        </>
    )
}

export default Home;