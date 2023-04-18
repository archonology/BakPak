import React from "react";
import { Nav, Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import calcPic from '../images/calcPic.png'
import dictionaryPic from '../images/dictionPic.png'

const Home = () => {
    return (
        <>
            {/* <h2>Pick a Tool</h2> */}
            <Container fluid="md" className="justify-content-center">
                <div className="manga">
                    <Row>
                        <Col
                            xs={11} sm={10} md={7}
                            className="tools"
                            as={Link}
                            to={'/calculator'}>Calculator
                        </Col>

                        <Col
                            xs={11} sm={10} md={4}
                            className="tools"
                            as={Link}
                            to={'/dictionary'}>Dictionary
                        </Col>
                    </Row>
                    {/* <Row>
                    <Col sm className="tools">sm=true</Col>
                    <Col sm className="tools">sm=true</Col>
                    <Col sm className="tools">sm=true</Col>
                </Row> */}
                </div>
            </Container>
            {/* <Container className="">
                <Row>
                    <Col>
                        <Nav.Link
                            as={Link}
                            to={'/calculator'}
                            className="col"
                        >
                            <img
                                src={calcPic}
                                alt={'calculator'}
                                className="tools"
                            ></img>
                        </Nav.Link>
                    </Col>
                    <Col>
                        <Nav.Link
                            as={Link}
                            to={'/dictionary'}
                        >
                            <img
                                src={dictionaryPic}
                                alt={'dictionary'}
                                className="tools"
                            ></img>
                        </Nav.Link>
                    </Col>


                </Row>
            </Container> */}
        </>
    )
}

export default Home;