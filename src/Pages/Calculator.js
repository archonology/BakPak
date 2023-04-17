import React from "react";
import Calculator from "../Components/Calculator";
import { Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';

const Calculate = () => {
  
    return (
        <>
           <Nav.Link as={Link} to={'/home'}><h5>Back to Pak</h5></Nav.Link>
            <Calculator />
        </>
    )
}

export default Calculate;