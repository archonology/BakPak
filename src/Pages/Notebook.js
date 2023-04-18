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
                    <p className="">4 April 2022 | 5:22pm</p>
                    <p className="">2 April 2022 | 3:21pm</p>

                    </Offcanvas.Body>
            </Offcanvas>
            
            <input type='submit' value={'create new post'} className="submit newPost"></input>

            <div className="note-box">
                <p className="">4 April 2022 | 5:22pm</p>
                <h4 className="notebook">Dear Diary, Don't forget to collect the software programs from the closet. Else the fish and cats will get into the programming.</h4>
                
                {/* <div className="savebtn">save word</div> */}
            </div>
            
{/* 
            <div className="note-box">
                <p className="">2 April 2022 | 3:21pm</p>
                <h4 className="notebook">Dear Diary, if the frog smokes all the cigarettes, call Hiro down at the docks. He knows how to trade tuna cans for smokes.</h4>
            </div> */}
        </>
    )
}

export default Notebook;