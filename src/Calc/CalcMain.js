import React, { useState, useEffect } from 'react';
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

    useEffect(() => {
        window.addEventListener('keyup', handleClick);
        return ()=> {
            window.removeEventListener('keyup', handleClick)
        }
    });

    // const handleKeyUp = (event) => {
    //   console.log(event.type)  
    // };

    const handleClick = (event) => {
        let id, val;
        

        if (event.type === 'click') {
            id = event.target.id;
            val = event.target.innerText;
        } else if (event.type === 'keyup') {
            id = event.key;
            val = event.key;
        }
        
        switch(true) {
            case nums.includes(id):
            handleNum(val)
            break;
            case opps.includes(id):
            handleOpp(val);
            break;
            case id === 'decimal' || id === ".":
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
        console.log('curr and new', currNum, newNum, 'test', currNum + num)

        if (solved) {
            setCurrNum(num);
            setDisplay(num);
            setSolved(false)
            return
        } else if (num === "0" && currNum.charAt(0) === "0") {
            return num
        } else {
            if (operand !== "") {
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
                setSolved(false);
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