import React, { useState } from 'react';
import Display from './Display';
import Keypad from './Keypad';
import Spacer from './Spacer';
import { nums, opps } from './Equate';
import { evaluate } from 'mathjs';


const CalcMain = () => {
    const [currNum, setCurrNum] = useState('');
    const [display, setDisplay] = useState('0');
    const [operand, setOpp] = useState('');
    const [equation, setEquation] = useState([]);
    const [solved, setSolved] = useState(false);

    const handleClick = (event) => {
        let id = event.target.id;
        let val = event.target.innerText
        
        switch(true) {
            case nums.includes(id):
            console.log('number', id);
            handleNum(val)
            break;
            case opps.includes(id):
            console.log('operand', id);
            handleOpp(val);
            break;
            case id === 'decimal':
            console.log(id);
            handleDec();
            break;
            default:
            console.log("didn't work")
        };
    };

    const handleClear = () => {
        
        setCurrNum('');
        setDisplay('0');
        setOpp('');
        setEquation([]);
        setSolved(false);
    };

    const handleNum = (num) => {
        let newNum = currNum + num;

        if (solved) {
            console.log('triggered')
            setCurrNum(num);
            setDisplay(num);
            setSolved(false)
            return
        } else if (num === "0" && currNum.charAt(0) === "0") {
            return num
        } else {
            if (operand !== "") {
              console.log(solved, 'solved')
              setEquation([...equation, currNum, operand]);
              setCurrNum(num);
              setDisplay(num);
              setOpp("");
            } else {
              setCurrNum(newNum);
              setDisplay(newNum);
            };
        };
    };

    const handleOpp = (opp) => {
        if (opp !== '-') {
            if (currNum === '' && !solved) {
                return
            } else {
                setOpp(opp);
                setSolved(false)
            }
        } else if ( opp === '-') {
            if (currNum === '') {
                setCurrNum('-');
            } else if (operand === '') {
                setOpp(opp);
            } else {
                setEquation([...equation, currNum, operand]);
                setCurrNum('-');
                setOpp('');
                
            };
        } 
    };

    const handleDec = () => {
        if (!currNum.includes('.')) {
            let withDec = currNum + '.'
            setCurrNum(withDec);
        };
    };

    const getSolution = () => {
        let problem = [...equation, currNum].join('');
        console.log('problem', problem);
        let solution = evaluate(problem).toString();
        setDisplay(solution);
        setEquation([]);
        setCurrNum(solution);
        setOpp('');
        setSolved(true);
        
    };
    
    return (
        <div className='calc-body'>
            <Display display={display}/>
            <Spacer />
            <Keypad 
                click={handleClick}
                clear={handleClear}
                solve={getSolution}
                />
        </div>
    )
};

export default CalcMain;