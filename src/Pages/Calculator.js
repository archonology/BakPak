import React from "react";
import Calculator from "../Components/Calculator";
import { Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';

const Calculate = () => {
  
    return (
        <>
           <Nav.Link as={Link} to={'/home'}><h4>Back</h4></Nav.Link>
            <Calculator />
        </>
    )
}

export default Calculate;