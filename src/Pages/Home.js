import React from "react";
import { Nav, Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
// import calcPic from '../images/calcPic.png'
// import dictionaryPic from '../images/dictionPic.png'
import calcPic from '../images/calcPic.png'

const Home = () => {
    return (
        <>
            {/* <h2>Pick a Tool</h2> */}
            <Container fluid="md" className="justify-content-center">
                <div className="manga">
                    <Row>
                        <Col
                            xs={11} sm={10} md={7}
                            className="tools toolCalc"
                            as={Link}
                            to={'/calculator'}><h2 className="toolTitle">Calculator <span className="japanTool"><br></br>電卓</span></h2>
                            <br></br>
                            {/* <p className="toolTitle">電卓</p> */}
                        </Col>

                        <Col
                            xs={11} sm={10} md={4}
                            className="tools toolDiction"
                            as={Link}
                            to={'/dictionary'}><h2 className="toolTitle">Dictionary <span className="japanTool"><br></br>辞書</span></h2>
                            <br></br>
                        </Col>
                        <Col
                            xs={11} sm={10} md={3}
                            className="tools toolNote"
                            as={Link}
                            to={'/notebook'}
                        >
                            <h2 className="toolTitle">Notebook <span className="japanTool"><br></br>
                                ノート</span></h2>
                            <br></br>
                        </Col>
                        <Col
                            xs={11} sm={10} md={8}
                            className="tools toolRecord"
                            as={Link}
                            to={'/recorder'}><h2 className="toolTitle">Recorder<span className="japanTool"><br></br>
                                ボイスレコーダー</span></h2>
                            <br></br>
                        </Col>
                        {/* <Col
                            xs={11} sm={10} md={8}
                            className="tools toolWeather"
                            as={Link}
                            to={'/weather'}><h2 className="toolTitle">Weather<span className="japanTool"><br></br>
                                天気</span></h2>
                            <br></br>
                        </Col> */}
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