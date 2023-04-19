import React from "react";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Nav, Modal, Form, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { useLocalForEntries } from "../utils/localStorage";

const Notes = () => {

    const [show, setShow] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleModalClose = () => setShowModal(false);
    const handleModalShow = () => setShowModal(true);

    // state mgmt for the notebook entries.
    const [entryDate, setEntryDateState] = useState('');
    const [entryText, setEntryTextState] = useState('');
    const [savedEntries, setSavedEntriesState] = useLocalForEntries(['saved_entries', []]);

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.type;
        const inputValue = target.value;

        if (inputType == 'datetime-local') {
            setEntryDateState(inputValue);
        } else if (inputType = 'textarea') {
            setEntryTextState(inputValue);
        }
    };

    const handleFormSubmit = (e) => {

    }

    // bindings for managing react-hook-form -- check out https://www.react-hook-form.com/api/useform/ to learn more.
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example")); // watch input value by passing the name of it

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


            <input onClick={handleModalShow} value={'create new entry'} className="submit newPost"></input>

            {/* Bootstrap modal */}
            <Modal show={showModal} onHide={handleModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>New Notebook Entry</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form onSubmit={handleFormSubmit}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Date</Form.Label>
                            <Form.Control
                                type="datetime-local"
                                value={entryDate}
                                onChange={handleInputChange}
                                placeholder="present moment"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="notebookForm.DateAndTime"
                        >
                            <Form.Label>Entry</Form.Label>
                            <Form.Control
                                type="textarea"
                                value={entryText}
                                onChange={handleInputChange}
                                rows={12} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleModalClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleModalClose}>
                        Save Entry
                    </Button>
                </Modal.Footer>
            </Modal>

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

export default Notes;