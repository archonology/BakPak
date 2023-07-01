import React from "react";
import { useState } from "react";
import { Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useLocalStr } from "../../utils/localStorage";
// import { getWeather } from "../../utils/api";

const weatherKey = "b5794a08ba88b4d36fef7769417b2041";

const WeatherCall = () => {

    // holds user input
    const [cityState, setCityState] = useState('');
    // holds the response data objects in an array
    const [responseState, setResponseState] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const localData = localStorage.getItem('saved_cities');

    const [savedCities, setSavedCities] = useLocalStr('saved_cities', []);

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



    const handlesavedCities = (city) => {

        for (let i = 0; i < savedCities.length; i++) {

            if (savedCities[i].city === city) {
                console.log('city match found');

                return setErrorMessage(`The city ${city} has already been saved.`);
            }
        }

        let newCity = {
            city_id: datetime,
            city: city
        };

        setSavedCities([newCity, ...savedCities]);
        setErrorMessage(`${cityState} has been saved.`);
    }

    const handleFetchSaved = async (city) => {

        try {
            const response = await fetch(`http://api.weatherstack.com/current?access_key=${process.env.WEATHER_API_KEY}&query=${city}`);

            if (!response.ok) {
                setErrorMessage("Sorry, we can't find that city.");
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
            const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityState}&cnt=6&appid=${weatherKey}&units=imperial`);

            if (!response.ok) {
                setErrorMessage("Sorry, we can't find that city.");
                setResponseState([]);
                throw new Error("something went wrong!");
            }

            const jsonData = await response.json();
            setErrorMessage('');
            setResponseState(jsonData);
            console.log(jsonData);
           

        } catch (err) {
            console.error(err);
        }
    };

    console.log(responseState);

    return (
        <>

            <Nav className="justify-content-center mb-5" activeKey="/home">
                <Nav.Item>
                    <Nav.Link as={Link} to={'/weather'}><strong className="title">Weather</strong></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to={'/home'}><em className="diction-nav">BakPak</em> </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="viewSaved" onClick={handleShow}><em className="diction-nav">Saved Cities</em></Nav.Link>
                </Nav.Item>
            </Nav>


            <section className="dictionary-section">

                <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title >Saved Cities</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>


                        {savedCities.length === 0 ? (<p>No saved cities yet</p>) : (savedCities.map((savedcity) => {

                            return (
                                <>
                                    <p
                                        key={savedcity.city_id}
                                        className="savedWrds"
                                        onClick={() => {
                                            setCityState(savedcity.city);
                                            handleFetchSaved(savedcity.city);
                                            setShow(false);
                                        }}>{savedcity.city}</p>
                                </>
                            )
                        })
                        )}


                    </Offcanvas.Body>
                </Offcanvas>
                <div className="dictionary">
                    <div className="search-container">


                        <form className="search-form">

                            <input
                                id="search"
                                name="search"
                                type="text"
                                placeholder="enter a city"
                                value={cityState}
                                onChange={(e) => setCityState(e.target.value)}
                            ></input>
                            <input type='submit' value={'search'} className="submit" onClick={handleFormSubmit}></input>
                        </form>

                    </div>

                    <div className="dictionary-container">

                        {responseState?.map((city, index) => {
                            return (
                                <>
                                    <div className="def-box">
                                        <div key={index++} className="definitions">

                                            <p >{city}</p>
                                            <h3>{city} degrees</h3>


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

                        handlesavedCities(cityState);

                    }
                    }>save city</div></>
                    ) : (<></>)}

                </div>
            </section>
        </>
    )
}

export default WeatherCall;