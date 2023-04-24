import React from "react";
import { useState } from "react";
import { Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Container, Row, Col } from "react-bootstrap";
// https://www.npmjs.com/package/react-media-recorder a react recorder pkg to handle the recording
import { ReactMediaRecorder } from "react-media-recorder";



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
                    <Nav.Link className="viewSaved" onClick={handleShow}><em className="diction-nav">Recordings</em></Nav.Link>
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

            <Container className="d-flex justify-content-center">
                <ReactMediaRecorder
                    audio
                    render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
                        <Row>
                            <Col>
                                <p>{status}</p>
                                <button onClick={startRecording}>Start Recording</button>
                                <button onClick={stopRecording}>Stop Recording</button>
                                <audio src={mediaBlobUrl} controls autoPlay />
                            </Col>

                        </Row>
                    )}
                />
            </Container>


        </>
    )
}

export default TheRecorder;