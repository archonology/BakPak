import React from "react";
import { useState } from "react";
import { Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';

const TheRecorder = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let currentdate = new Date();
    let datetime = (currentdate.getMonth() + 1) + "/"
        + currentdate.getDate() + "/"
        + currentdate.getFullYear() + ' @ '
        + currentdate.getHours() + ':'
        + (currentdate.getMinutes() < 10 ? '0' : '') + currentdate.getMinutes() + ':'
        + (currentdate.getSeconds() < 10 ? '0' : '') + currentdate.getSeconds();

    return (
        <>
            <Nav className="justify-content-center mb-5" activeKey="/home">
                <Nav.Item>
                    <Nav.Link as={Link} to={'/recorder'}><strong className="title">Recorder</strong></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to={'/home'}><em className="diction-nav">BakPak</em> </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="viewSaved" onClick={handleShow}><em className="diction-nav">Saved Recordings</em></Nav.Link>
                </Nav.Item>
            </Nav>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title >Recordings</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ul>

                        {/* {savedWords.length === 0 ? (<li>No saved words yet</li>) : (savedWords.map((word) => {

                            return (
                                <>
                                    <li
                                        className="savedWrds"
                                        key={word}
                                        onClick={() => {
                                            setWordState(word);
                                            handleFetchSaved(word);
                                            setShow(false);
                                        }}>{word}</li>
                                </>
                            )
                        }))
                        } */}
                    </ul>

                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default TheRecorder;