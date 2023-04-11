import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';
import FindWord from "../Components/Dictionary";

const Dictionary = () => {

    return (
        <>
            <Nav.Link as={Link} to={'/home'}><h4>Back</h4></Nav.Link>
            <FindWord />
        </>
    )
}

export default Dictionary;