import React from "react";
import { useState } from "react";
import { Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { putWordsDb } from "../../utils/database";
import { useLocalStr } from "../../utils/localStorage";


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



    const handleSavedWords = (word) => {

        for (let i = 0; i < savedWords.length; i++) {

            if (savedWords[i] === word) {
                console.log('word match found');

                return setErrorMessage(`The word ${word} has already been saved.`);
            }
        }
        setSavedWords([...savedWords, word]);
        putWordsDb(word);
        setErrorMessage(`${wordState} has been saved.`);
    }

    const handleFetchSaved = async (word) => {

        try {
            const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);

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
            {/* <h2 className="title">Dictionary</h2> */}

            <Nav className="justify-content-center mb-5" activeKey="/home">
                <Nav.Item>
                    <Nav.Link as={Link} to={'/dictionary'}><strong className="title">Dictionary</strong></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to={'/home'}><em className="diction-nav">BakPak</em> </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="viewSaved" onClick={handleShow}><em className="diction-nav">Saved Entries</em></Nav.Link>
                </Nav.Item>
            </Nav>


            <section className="dictionary-section">

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
                                            key={word}
                                            onClick={() => {
                                                setWordState(word);
                                                handleFetchSaved(word);
                                                setShow(false);
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

                    <div className="dictionary-container">

                        {responseState?.map((word) => {

                            return (
                                <>
                                    <div className="def-box">
                                        <div key={crypto.randomUUID()} className="definitions">

                                            {/* <p >{word.phonetic}</p> */}

                                            <p >{word.meanings[0].definitions[0].definition}</p>
                                            {word.meanings[0].definitions[1] ? (
                                                <>
                                                    <hr></hr>
                                                    <p>{word.meanings[0].definitions[1].definition}</p>
                                                </>
                                            ) : (<></>)}
                                            <hr></hr>
                                        </div>


                                    </div>

                                </>

                            );
                        })}
                        {errorMessage && (
                            <div>
                                <p className="error-text"><em>{errorMessage}</em></p>
                            </div>
                        )}
                    </div>
                    {responseState.length !== 0 ? (<>   <div className="savebtn" onClick={() => {

                        handleSavedWords(wordState);

                    }
                    }>save word</div></>
                    ) : (<></>)}

                </div>
            </section>
        </>
    )
}

export default FindWord;