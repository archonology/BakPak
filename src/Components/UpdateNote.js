import React from "react";
import { useState } from "react";
import { Nav, Modal, Button, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { BsFillTrash3Fill } from 'react-icons/bs'
import { removeEntry, useLocalForEntries } from "../utils/localStorage";

const UpdateNote = (modalState, note) => {

    // removeEntry('4/19/2023 @143556');
    console.log(`This is note: ${note}`);
    const [show, setShow] = useState(false);
    const [showModal, setShowModal] = useState(modalState);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleModalClose = () => setShowModal(false);
    const handleModalShow = () => setShowModal(true);

    // state mgmt for the notebook entries.
    const [entryTitle, setTitleState] = useState(note.title);
    const [entryText, setEntryTextState] = useState(note.entry);
    const [savedEntries, setSavedEntriesState] = useLocalForEntries('saved_entries', []);


    // console.log(savedEntries);

    const handleInputChange = (e) => {
        let { target } = e;
        let inputType = target.name;
        let inputValue = target.value;
        console.log(inputValue);

        if (inputType === 'titleText') {
            setTitleState(inputValue);
        } else if (inputType === 'entryText') {
            setEntryTextState(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        let currentdate = new Date();
        let datetime = (currentdate.getMonth() + 1) + "/"
            + currentdate.getDate() + "/"
            + currentdate.getFullYear() + ' @ '
            + currentdate.getHours() + ':'
            + (currentdate.getMinutes() < 10 ? '0' : '') + currentdate.getMinutes() + ':'
            + (currentdate.getSeconds() < 10 ? '0' : '') + currentdate.getSeconds();

        let entry = {
            date: datetime,
            title: entryTitle,
            entry: entryText
        };

        setSavedEntriesState([entry, ...savedEntries]);
        setTitleState('');
        setEntryTextState(``);
    }

    return (
        <>
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
                            <textarea
                                type="textarea"
                                name='entryText'
                                id="entry"
                                rows={6}
                                value={entryText}
                                onChange={handleInputChange}
                                placeholder="entry"
                                className="textEntry"
                            />
                            <button
                                type="submit"
                                id="submit"
                                value='submit'
                                className="entrySubmit"
                                onClick={handleModalClose}
                            >submit changes</button>
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
    )
}

export default UpdateNote;