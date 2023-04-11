import React from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";



const FindWord = () => {


    const [wordState, setWordState] = useState('');
    const [responseState, setResponseState] = useState([]);

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordState}`);

            if (!response.ok) {
                throw new Error("something went wrong!");
            }

            const jsonData = await response.json();
            console.log(jsonData);
            setResponseState(jsonData);

        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
            <Container className="dictionary-container">
                <form>
                    <label htmlFor='search'>Search</label>
                    <input
                        id="search"
                        name="search"
                        type="text"
                        placeholder="enter a word"
                        value={wordState}
                        onChange={(e) => setWordState(e.target.value)}
                    ></input>

                    <input type='submit' value={'submit'} onClick={handleFormSubmit}></input>
                </form>
            </Container>
            {responseState.map((word, index) => {
                index = Number(index);
                return (
                    <>

                        <div >
                            {/* <h2>{word.word}</h2> */}
                            <p key={index}>{word.phonetic}</p>

                            <p>{word.meanings[0].definitions[0].definition}</p>

                            {word.meanings[0].definitions[1] === true ? (
                                <>
                                    <p>{word.meanings[0].definitions[1].definition}</p>
                                </>
                            ) : (<></>)}

                        </div>

                    </>
                );
            })}

        </>
    )
}

export default FindWord;