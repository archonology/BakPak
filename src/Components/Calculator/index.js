import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const Calculator = () => {
    const buttonValueArr = ['C', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.'];
    let key = 0;
    let runningNum = '';
    let numArray = [];
    let runningMaths = '';
    let solution = 0;

    const [displayState, setDisplayState] = useState('');
    const [mathTypeState, setMathTypeState] = useState('');
    const [valueState, setValueState] = useState([]);

    // build the user's number by adding characters to strings, later converted to numbers
    function buildNum(value) {
        runningNum += value;

    }

    function saveNums() {
        numArray.push(runningNum);
        runningNum = '';
    }

    function addNums() {
        solution = numArray.reduce((a, b) => Number(a) + Number(b));
        numArray = [];
        return solution;
    }

    function saveMaths(value) {
        runningMaths = value;
    }

    return (
        <>
            <Container className="box-outer">
                <Row>
                    <Col className="input-display">
                        <h2>{displayState}<span>{mathTypeState}</span></h2>
                    </Col>
                </Row>
                <div className="flex-container">

                    <div
                        value={'clear'}
                        onClick={() => {
                            setDisplayState('');
                            runningNum = '';
                        }}
                    >
                        C
                    </div>
                    <div>+/-</div>
                    <div>%</div>
                    <div>÷</div>
                    <div
                        value={'7'}
                        onClick={() => {
                            buildNum('7');
                            setDisplayState(displayState + runningNum);
                        }}
                    >
                        7
                    </div>
                    <div
                        value={'8'}
                        onClick={() => {
                            buildNum('8');
                            setDisplayState(displayState + runningNum);
                        }}
                    >
                        8
                    </div>
                    <div
                        value={'9'}
                        onClick={() => {
                            buildNum('9');
                            setDisplayState(displayState + runningNum);
                        }}
                    >
                        9
                    </div>
                    <div>x</div>
                    <div
                        value={'4'}
                        onClick={() => {
                            buildNum('4');
                            setDisplayState(displayState + runningNum);
                        }}
                    >
                        4
                    </div>
                    <div
                        value={'5'}
                        onClick={() => {
                            buildNum('5');
                            setDisplayState(displayState + runningNum);
                        }}
                    >
                        5
                    </div>
                    <div
                        value={'6'}
                        onClick={() => {
                            buildNum('6');
                            setDisplayState(displayState + runningNum);
                        }}
                    >
                        6
                    </div>
                    <div>-</div>
                    <div
                        value={'1'}
                        onClick={() => {
                            buildNum('1');
                            setDisplayState(displayState + runningNum);
                        }}
                    >
                        1
                    </div>
                    <div
                        value={'2'}
                        onClick={() => {
                            buildNum('2');
                            setDisplayState(displayState + runningNum);
                        }}
                    >
                        2
                    </div>
                    <div
                        value={'3'}
                        onClick={() => {
                            buildNum('3');
                            setDisplayState(displayState + runningNum);
                        }}
                    >
                        3
                    </div>
                    <div>+</div>
                    <div
                        value={'0'}
                        onClick={() => {
                            buildNum('0');
                            setDisplayState(displayState + runningNum);
                        }}
                    >
                        0
                    </div>
                    <div
                        value={'.'}
                        onClick={() => {
                            buildNum('.');
                            setDisplayState(displayState + runningNum);
                        }}
                    >
                        .
                    </div>

                    <div
                        className="equals"
                    // onClick={() => {
                    //     num = Number(numState);
                    //     handleEquation(num, mathState);
                    //     setMathState('');
                    //     // console.log(mathNums);
                    // }}
                    >=
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Calculator;