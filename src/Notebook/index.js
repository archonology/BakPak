import React from "react";
import { useState } from "react";
import { Nav, Modal, Button, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { BsFillTrash3Fill } from 'react-icons/bs'
import { removeEntry, useLocalForEntries } from "../utils/localStorage";

const Notes = () => {

    // removeEntry('4/19/2023 @143556');

    const [show, setShow] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleModalClose = () => setShowModal(false);
    const handleModalShow = () => setShowModal(true);

    // state mgmt for the notebook entries.
    const [entryTitle, setTitleState] = useState('');
    const [entryText, setEntryTextState] = useState(``);
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
                    {savedEntries.map((entry) => {
                        return (
                            <>
                                <Nav.Link key={entry.date} className="entries"> <em>{entry.title}</em> | {entry.date}
                                    <span className="trashEntry"
                                        onClick={() => {

                                            const updatedEntries =
                                                savedEntries.filter((savedEntry) => savedEntry.date !== entry.date);

                                            setSavedEntriesState(updatedEntries);

                                            removeEntry(entry.date);

                                        }}
                                    >
                                        <BsFillTrash3Fill />
                                    </span>
                                </Nav.Link>
                                <br />
                            </>
                        )

                    })}

                </Offcanvas.Body>
            </Offcanvas>

            <div className="d-flex justify-content-center">
                <div onClick={handleModalShow} className="submit newPost">create a new entry</div>
            </div>
            {/* Bootstrap modal */}
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

            {savedEntries.map((entry) => {
                return (
                    <>
                        <div key={entry.date} className="note-box" >
                            <hr />
                            <h3 className="noteTitle" >{entry.title}<span></span></h3>
                            <p className="date">{entry.date}</p>
                            <p className="notebook">{entry.entry}</p>

                        </div>
                    </>
                )

            })}
        </>
    )
}

export default Notes;