import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Nav.Link as={Link} to={'/'} ><h1 className="header">BAKPAK!</h1></Nav.Link>
        </>
    )
}

export default Header;