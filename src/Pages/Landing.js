import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { Container } from "react-bootstrap";
import bakPakPic from '../images/BakPak.jpg'

const Landing = () => {
    return (
        <>
            <Nav.Link as={Link} to={'/home'}><img
                src={bakPakPic}
                className="bakpakPic"
            >
            </img></Nav.Link>
            {/* <div className="top-pack"></div>
           <div className="backpack">
                <div>----------------</div>
            </div></Nav.Link>  */}
        </>
    )
}

export default Landing;