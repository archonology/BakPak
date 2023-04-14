import React from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { getWordsDb, putWordsDb } from "../../utils/database";


const FindWord = () => {

    // holds user input
    const [wordState, setWordState] = useState('');
    // holds the response data objects in an array
    const [responseState, setResponseState] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const [savedWords, setSavedWords] = useState([]);

    const localData = localStorage.getItem('saved_words');

    getWordsDb().then((data) => {
        console.info('Loaded data from IndexedDB, injecting into dictionary history');
        setSavedWords(data);
        // setSavedWords.setValue(data || localData);
    });

    const handleSavedWords = async (word) => {

        try {
            setSavedWords([savedWords, wordState]);
            localStorage.setItem('saved_words', [wordState]);
            putWordsDb(localStorage.getItem('saved_words'));
        } catch (err) {
            console.error(err);
        }
    }

    // setSavedBookIds([...savedBookIds, bookToSave.bookId]);

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
            console.log(jsonData);
            setErrorMessage('');
            setResponseState(jsonData);

        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
            <Container className="dictionary">
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
                <div className="dictionary-container">
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                    {responseState.map((word, index) => {
                        index = Number(index);
                        return (
                            <>

                                <div className="definitions">

                                    <p key={index}>{word.phonetic}</p>

                                    <p>{word.meanings[0].definitions[0].definition}</p>

                                    <button className="submit" onClick={() => {
                                        handleSavedWords(word);
                                    }
                                       }>save</button>
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
            </Container>
        </>
    )
}

export default FindWord;