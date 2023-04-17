import React from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";


// a few globals
let runningNum = '';
let numArray = [];
let solution = '';


const Calculator = () => {

    const [displayState, setDisplayState] = useState('');
    const [mathTypeState, setMathTypeState] = useState('');
    const [historyState, setHistoryState] = useState('');

    // build the user's number by adding characters to strings
    function buildNum(value) {
        runningNum += value;
    }

    function buildHistory(value, math) {
        setHistoryState(`${value} ${math}`);
    }

    // save the runningNum to the global array when the user clicks the various math buttons
    function saveNums() {
        numArray.push(runningNum);
        console.log(numArray);
        runningNum = '';
    }

    function add() {
        solution = numArray.reduce((a, b) => Number(a) + Number(b));
        numArray = [];
        setHistoryState('');
        setDisplayState(solution);
        return solution;
    }

    function subtract() {
        solution = numArray.reduce((a, b) => Number(a) - Number(b));
        numArray = [];
        setHistoryState('');
        setDisplayState(solution);
        return solution;
    }

    function multiply() {
        solution = numArray.reduce((a, b) => Number(a) * Number(b));
        numArray = [];
        setHistoryState('');
        setDisplayState(solution);
        return solution;
    }

    function divide() {
        solution = numArray.reduce((a, b) => Number(a) / Number(b));
        numArray = [];
        setHistoryState('');
        setDisplayState(solution);
        return solution;
    }

    // the trickiest bit to build for sure! here is a resource: https://devblogs.microsoft.com/oldnewthing/20080110-00/?p=23853
    function percent() {
        // if (mathTypeState) {
        //     let multiply = numArray.reduce((a, b) => Number(a) * Number(b));
        //     solution = Number(multiply) / 100;
        //     console.log(solution.toString());
        //     numArray = [];
        // } else {
        solution = Number(runningNum) / 100;
        console.log(solution.toString());
        runningNum = solution.toString();
        setDisplayState(runningNum);
        return runningNum;
        // }

    }

    return (
        <>
            <div className="calc-body">
                {/* <Row> */}
                <div className="input-display">

                    {/* <br></br> */}
                    <h2>{displayState}<span>{historyState}</span></h2>
                </div>
                {/* </Row> */}
                <div className="flex-container">

                    <div
                        value={'clear'}
                        onClick={() => {
                            setDisplayState('');
                            setMathTypeState('');
                            setHistoryState('');
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
                    <div
                        value={'%'}
                        onClick={() => {
                            // saveNums();
                            setMathTypeState('%');
                            percent();
                        }}
                    >
                        %
                    </div>
                    <div
                        value={'÷'}
                        onClick={() => {
                            buildHistory(runningNum, '÷');
                            saveNums();
                            setMathTypeState('÷');
                            setDisplayState('');
                        }}
                    >
                        ÷
                    </div>
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
                            buildHistory(runningNum, 'x');
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
                            buildHistory(runningNum, '-');
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
                            buildHistory(runningNum, '+');
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
                            if (mathTypeState === '+') {
                                add();
                                buildNum(solution);
                            } else if (mathTypeState === '-') {
                                subtract();
                                buildNum(solution);
                            } else if (mathTypeState === 'x') {
                                multiply();
                                buildNum(solution);
                            } else if (mathTypeState === '÷') {
                                divide();
                                buildNum(solution);
                            } else if (mathTypeState === '%') {
                                percent();
                                buildNum(solution);
                            }

                            else {
                                setDisplayState('BAKPAK!');
                                numArray = [];
                            }


                        }}

                    >
                        =
                    </div>

                </div>
            </div>
        </>
    )
}

export default Calculator;