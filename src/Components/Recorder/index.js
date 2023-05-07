import React from "react";
import { useState, useEffect } from "react";
import { Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Container, Row, Col } from "react-bootstrap";
// https://www.npmjs.com/package/react-media-recorder a react recorder pkg to handle the recording
import { ReactMediaRecorder } from "react-media-recorder";
import { datetime } from "../../utils/currentTime";

const TheRecorder = () => {
    const [recordStatus, setRecordStatus] = useState(false);
    const [animate, setAnimate] = useState("Recording");
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // with this useEffect we manage setting and clearing the time interval to animate the recording status.
    useEffect(() => {
        let animateRecording = "Recording";

        function timer() {
            animateRecording += ".";
            setAnimate(animateRecording);
            console.log(animateRecording);
            if (animateRecording.length >= 13) {
                animateRecording = "Recording";
                setAnimate(animateRecording);
            }

        };
        const interval = setInterval(() => {
            if (recordStatus === false) {
                return;
            }
            if (recordStatus === true) {
                timer();
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [recordStatus]);



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

                    </ul>

                </Offcanvas.Body>
            </Offcanvas>

            <Container className="d-flex justify-content-center">
                <ReactMediaRecorder
                    audio
                    render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
                        <Row>
                            <Col>

                                <div onClick={() => {
                                    startRecording();
                                    setRecordStatus(true);
                                }}
                                    className="startRecording">Start Recording</div>
                                <div onClick={() => {
                                    stopRecording();
                                    setRecordStatus(false);
                                }}
                                    className="stopRecording">Stop Recording</div>

                                {status === 'recording' ? (<p className="status">{datetime} | {animate}</p>) : (<></>)}
                                {!mediaBlobUrl ? (
                                    <audio src={mediaBlobUrl} controls hidden />
                                ) : (
                                    <audio src={mediaBlobUrl} controls />
                                )}
                            </Col>

                        </Row>
                    )}
                />
            </Container>


        </>
    )
}

export default TheRecorder;