import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Nav.Link as={Link} to={'/home'} ><h1 className="header">BAKPAK!<span className="japan">バックパック</span></h1></Nav.Link>
            <hr></hr>
        </>
    )
}

export default Header;