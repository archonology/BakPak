import React from "react";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { getWordsDb, putWordsDb } from "../../utils/database";
import { getSavedWords, useLocalStr } from "../../utils/localStorage";


const FindWord = () => {

    // holds user input
    const [wordState, setWordState] = useState('');
    // holds the response data objects in an array
    const [responseState, setResponseState] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const localData = localStorage.getItem('saved_words');

    const [savedWords, setSavedWords] = useLocalStr('saved_words', []);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    // set up useEffect hook to save the words list to localStorage on component unmount
    // learn more here: https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup
    // useEffect(() => {
    //     return () => {
    //         getWordsDb().then((data) => {
    //             console.info('Loaded data from IndexedDB, injecting into dictionary history');
    //             console.log(data[0].savedWords);
    //             const words = data;

    //             console.log(savedWords);
    //             // setSavedWords(data);
    //             // setSavedWords.setValue(data || localData);
    //         }, []);


    //     };

    // });



    const handleSavedWords = async (word) => {

        try {
            setSavedWords([...savedWords, word]);
            putWordsDb(word);

        } catch (err) {
            console.error(err);
        }
    }



    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordState}`);

            if (!response.ok) {
                setErrorMessage("Sorry, we can't find that word.");
                setResponseState([]);
                throw new Error("something went wrong!");
            }

            const jsonData = await response.json();
            setErrorMessage('');
            setResponseState(jsonData);

        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
            <h5 className="viewSaved" onClick={handleShow}>
                View Saved Words
            </h5>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title >Saved Words</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ul>

                        {savedWords.length === 0 ? (<li>No saved words yet</li>) : (savedWords.map((word) => {

                            return (
                                <>
                                    <li
                                        className="savedWrds"
                                        key={crypto.randomUUID()}
                                        onClick={() => {
                                            setWordState(word);
                                        }}>{word}</li>
                                </>
                            )
                        }))
                        }
                    </ul>

                </Offcanvas.Body>
            </Offcanvas>
            <div className="dictionary">
                <div className="search-container">

                    <form className="search-form">
                        <h2 className="title">Dictionary</h2>
                        <input
                            id="search"
                            name="search"
                            type="text"
                            placeholder="enter a word"
                            value={wordState}
                            onChange={(e) => setWordState(e.target.value)}
                        ></input>
                        <input type='submit' value={'search'} className="submit" onClick={handleFormSubmit}></input>
                    </form>
                </div>
                <div className="savebtn" onClick={() => {
                    if (wordState) {
                        handleSavedWords(wordState);
                        setErrorMessage(`The word ${wordState} was saved!`);
                    } else {
                        setErrorMessage('Nothing to save yet');
                    }

                }
                }>save word</div>
                <div className="dictionary-container">
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                    {responseState.map((word) => {

                        return (
                            <>


                                <div key={crypto.randomUUID()} className="definitions">

                                    <p >{word.phonetic}</p>

                                    <p >{word.meanings[0].definitions[0].definition}</p>

                                    {word.meanings[0].definitions[1] === true ? (
                                        <>
                                            <p>{word.meanings[0].definitions[1].definition}</p>
                                        </>
                                    ) : (<></>)}

                                </div>

                            </>
                        );
                    })}
                </div>
            </div>
            <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossOrigin="true"></script>

            <script src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js" crossOrigin="true"></script>

            <script src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js" crossOrigin="true"></script>

            <script>var Alert = ReactBootstrap.Alert;</script>
        </>
    )
}

export default FindWord;