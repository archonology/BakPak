import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Calculator = () => {
    return (
        <>
            <h4>Back</h4>
            <Container className="box-outer">
                <Row>
                    <Col className="box-display">
                        <h2>108.77777</h2>
                    </Col>
                </Row>
                <div className="flex-container">
                    <div>C</div>
                    <div>+/-</div>
                    <div>%</div>
                    <div>÷</div>
                    <div>7</div>
                    <div>8</div>
                    <div>9</div>
                    <div>x</div>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                    <div>-</div>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>+</div>
                    <div>0</div>
                    <div>.</div>
                    <div className="equals">=</div>
                </div>
            </Container>
        </>
    )
}

export default Calculator;