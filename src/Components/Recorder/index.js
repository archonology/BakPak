import React from "react";
import { useState, useEffect } from "react";
import { Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
// https://www.npmjs.com/package/react-media-recorder a react recorder pkg to handle the recording
import { ReactMediaRecorder } from "react-media-recorder";
import { datetime } from "../../utils/currentTime";
import { useLocalForRecordings } from "../../utils/localStorage";

const TheRecorder = () => {
    const [recordStatus, setRecordStatus] = useState(false);
    const [animate, setAnimate] = useState("Recording");
    const [show, setShow] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [entryTitle, setTitleState] = useState('');
    const [entryRecording, setEntryRecordingState] = useState('');
    const [savedEntries, setSavedEntriesState] = useLocalForRecordings('saved_recordings', []);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleModalClose = () => setShowModal(false);
    const handleModalShow = () => setShowModal(true);

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

    const handleInputChange = (e) => {
        let { target } = e;
        let inputType = target.name;
        let inputValue = target.value;
        console.log(inputValue);

        if (inputType === 'titleText') {
            setTitleState(inputValue);
        } 
      
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();


        let entry = {
            date: datetime,
            title: entryTitle,
            recording: entryRecording
        };

        setSavedEntriesState([entry, ...savedEntries]);
        setTitleState('');
        setEntryRecordingState('');
    }
    console.log(savedEntries);


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
                                    <>
                                        <audio src={mediaBlobUrl} controls />
                                            <div onClick={() => {
                                                handleModalShow();
                                                setEntryRecordingState(mediaBlobUrl);
                                                console.log(mediaBlobUrl);
                                            }} className="submit newPost ">save recording</div>
                                        <Modal show={showModal} onHide={handleModalClose}>
                                            <Modal.Header closeButton>
                                                <Modal.Title>New Notebook Entry</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>

                                                <form
                                                    onSubmit={handleFormSubmit}
                                                    className="entryForm d-flex justify-content-center"
                                                >
                                                    <Row>
                                                        {/* <label for="title">Title:</label><br /> */}
                                                        <input
                                                            type="text"
                                                            name='titleText'
                                                            id="title"
                                                            value={entryTitle}
                                                            onChange={handleInputChange}
                                                            placeholder="title"
                                                            className="titleEntry"
                                                            autoFocus
                                                        />
                                                        <button
                                                            type="submit"
                                                            id="submit"
                                                            value='submit'
                                                            className="entrySubmit"
                                                                onClick={() => {
                                                                    handleModalClose();
                                                                    setEntryRecordingState(mediaBlobUrl);
                                                                    console.log(mediaBlobUrl);
                                                                }}
                                                        >submit</button>
                                                    </Row>
                                                </form>
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="secondary" onClick={handleModalClose}>
                                                    Close
                                                </Button>

                                            </Modal.Footer>
                                        </Modal>
                                    </>
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