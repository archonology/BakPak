import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const Calculator = () => {
    //initialize our input to populate the caculator screen
    let currentNum = '';
    let result = '';
    const [numState, setNumState] = useState('');
    const [mathState, setMathState] = useState('');
    let num = numState;
    const [mathNums, setMathNumState] = useState([num]);

    const addToNum = (value) => setNumState(numState + value);
    const addToCurrent = (value) => result = currentNum + value;


    async function handleEquation(value, mathType) {

        if (mathType === '%') {
            for (let i = 0; i < mathNums.length; i++) {
                console.log(mathNums);
                const solution = mathNums[i] % Number(numState);
                setNumState(solution);
                console.log(numState);
            }

        }
        if (mathType === '+') {
            for (let i = 0; i < mathNums.length; i++) {
                console.log(mathNums[i]);
                const solution = mathNums[i] + Number(numState);
                setNumState(solution);
                console.log(numState);
            }

        }
    }

    return (
        <>
            <Container className="box-outer">
                <Row>
                    <Col className="input-display">
                        <h2>{numState}<span>{mathState}</span></h2>
                    </Col>
                </Row>
                <div className="flex-container">
                    <div
                        onClick={() => {
                            setNumState('');
                            setMathState('');
                        }}
                    >C
                    </div>
                    <div value='+/-'>+/-</div>
                    <div
                        onClick={() => {

                            console.log(numState);
                            setMathState('%');
                            num = Number(numState);
                            setMathNumState([...mathNums, num]);
                            setNumState('');
                            // setMathState('');
                            console.log(mathNums);
                        }}
                    >%</div>
                    <div>÷</div>
                    <div
                        // handle concatenation as user builds there input number
                        onClick={() => setNumState(numState + '7')}
                    >7
                    </div>
                    <div
                        onClick={() => setNumState(numState + '8')}
                    >8
                    </div>
                    <div
                        onClick={() => setNumState(numState + '9')}
                    >9
                    </div>
                    <div>x</div>
                    <div
                        onClick={() => setNumState(numState + '4')}
                    >4
                    </div>
                    <div
                        onClick={() => setNumState(numState + '5')}
                    >5
                    </div>
                    <div
                        onClick={() => setNumState(numState + '6')}
                    >6
                    </div>
                    <div>-</div>
                    <div
                        onClick={() => {

                            addToCurrent('1');

                            if (currentNum === '') {
                                currentNum = '1';
                                console.log(result);
                            } else {
                                // addToNum('1');
                                result = currentNum + '1';
                                currentNum = result;
                                console.log(result);
                            }



                        }}

                    >1
                    </div>
                    <div
                        onClick={() => setNumState(numState + '2')}
                    >2
                    </div>
                    <div
                        onClick={() => setNumState(numState + '3')}
                    >3
                    </div>
                    <div
                        onClick={() => {
                            setMathState('+');
                            num = Number(currentNum);
                            console.log(num);
                            // setMathNumState(num);
                            setMathNumState([num, ...mathNums]);
                            setNumState('');
                            // setMathState('');
                            console.log(mathNums);

                        }}
                    >+
                    </div>
                    <div
                        onClick={() => setNumState(numState + '0')}
                    >0
                    </div>
                    <div>.</div>
                    <div
                        className="equals"
                        onClick={() => {
                            num = Number(numState);
                            handleEquation(num, mathState);
                            setMathState('');
                            // console.log(mathNums);
                        }}
                    >=
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Calculator;