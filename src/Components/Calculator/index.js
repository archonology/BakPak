import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
let runningNum = '';
let numArray = [];
let solution = 0;
const Calculator = () => {



    const [displayState, setDisplayState] = useState('');
    const [mathTypeState, setMathTypeState] = useState('');
    const [valueState, setValueState] = useState([]);

    // build the user's number by adding characters to strings, later converted to numbers
    function buildNum(value) {
        runningNum += value;
    }

    function saveNums() {
        numArray.push(runningNum);
        console.log(numArray);
        runningNum = '';
    }

    function add() {
        solution = numArray.reduce((a, b) => Number(a) + Number(b));
        numArray = [];
        setDisplayState(solution);
        return solution;
    }

    function subtract() {
        solution = numArray.reduce((a, b) => Number(a) - Number(b));
        numArray = [];
        setDisplayState(solution);
        return solution;
    }

    function multiply() {
        solution = numArray.reduce((a, b) => Number(a) * Number(b));
        numArray = [];
        setDisplayState(solution);
        return solution;
    }

    // function saveMaths(value) {
    //     runningMaths = value;
    // }

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
                            setMathTypeState('');
                            runningNum = '';
                        }}
                    >
                        C
                    </div>
                    <div
                        value={'+/-'}
                        onClick={() => {
                            if (runningNum[0] === '-') {
                                let positive = runningNum.slice(1);
                                console.log(positive);
                                runningNum = positive;
                                setDisplayState(runningNum);
                            } else {
                                let splitNum = runningNum.split('');
                                splitNum.splice(0, 0, '-');
                                runningNum = splitNum.join('');
                                console.log(runningNum);
                                setDisplayState(runningNum);
                            }

                        }}
                    >
                        +/-
                    </div>
                    <div>%</div>
                    <div>÷</div>
                    <div
                        value={'7'}
                        onClick={() => {
                            buildNum('7');
                            setDisplayState(runningNum);
                        }}
                    >
                        7
                    </div>
                    <div
                        value={'8'}
                        onClick={() => {
                            buildNum('8');
                            setDisplayState(runningNum);
                        }}
                    >
                        8
                    </div>
                    <div
                        value={'9'}
                        onClick={() => {
                            buildNum('9');
                            setDisplayState(runningNum);
                        }}
                    >
                        9
                    </div>
                    <div
                        value={'x'}
                        onClick={() => {
                            saveNums();
                            setMathTypeState('x');
                            setDisplayState('');
                        }}
                    >
                        x
                    </div>
                    <div
                        value={'4'}
                        onClick={() => {
                            buildNum('4');
                            setDisplayState(runningNum);
                        }}
                    >
                        4
                    </div>
                    <div
                        value={'5'}
                        onClick={() => {
                            buildNum('5');
                            setDisplayState(runningNum);
                        }}
                    >
                        5
                    </div>
                    <div
                        value={'6'}
                        onClick={() => {
                            buildNum('6');
                            setDisplayState(runningNum);
                        }}
                    >
                        6
                    </div>
                    <div
                        value={'-'}
                        onClick={() => {
                            saveNums();
                            setMathTypeState('-');
                            setDisplayState('');
                        }}
                    >
                        -
                    </div>
                    <div
                        value={'1'}
                        onClick={() => {
                            buildNum('1');
                            setDisplayState(runningNum);
                        }}
                    >
                        1
                    </div>
                    <div
                        value={'2'}
                        onClick={() => {
                            buildNum('2');
                            setDisplayState(runningNum);
                        }}
                    >
                        2
                    </div>
                    <div
                        value={'3'}
                        onClick={() => {
                            buildNum('3');
                            setDisplayState(runningNum);
                        }}
                    >
                        3
                    </div>
                    <div
                        value={'+'}
                        onClick={() => {
                            saveNums();
                            setMathTypeState('+');
                            setDisplayState('');
                        }}
                    >
                        +
                    </div>
                    <div
                        value={'0'}
                        onClick={() => {
                            buildNum('0');
                            setDisplayState(runningNum);
                        }}
                    >
                        0
                    </div>
                    <div
                        value={'.'}
                        onClick={() => {
                            buildNum('.');
                            setDisplayState(runningNum);
                        }}
                    >
                        .
                    </div>

                    <div
                        value={'='}
                        className="equals"
                        onClick={() => {
                            setMathTypeState('');
                            saveNums();
                            console.log(mathTypeState);
                            if (mathTypeState === '+') {
                                add();
                                buildNum(solution);
                            } else if (mathTypeState === '-') {
                                subtract();
                                buildNum(solution);
                            } else if (mathTypeState === 'x') {
                                multiply();
                                buildNum(solution);
                            }

                            else {
                                setDisplayState('no maths!');
                            }


                        }}

                    >
                        =
                    </div>

                </div>
            </Container>
        </>
    )
}

export default Calculator;