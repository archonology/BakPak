import React from "react";
import { useState, useEffect } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';


const Notebook = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Nav className="justify-content-center mb-5" activeKey="/home">
                <Nav.Item>
                    <Nav.Link as={Link} to={'/notebook'}><strong className="title">Notebook</strong></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to={'/home'}><em className="diction-nav">BakPak</em> </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="viewSaved" onClick={handleShow}><em className="diction-nav">Saved Entries</em></Nav.Link>
                </Nav.Item>
            </Nav>


                <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title >Notebook Entries</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                  

                    </Offcanvas.Body>
                </Offcanvas>
        </>
    )
}

export default Notebook;