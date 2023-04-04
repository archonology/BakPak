import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <>     
            <div className="top-pack"></div>
           <Nav.Link as={Link} to={'/'}><div className="backpack">
                <div>-----------------</div>
            </div></Nav.Link> 
        </>
    )
}

export default Landing;