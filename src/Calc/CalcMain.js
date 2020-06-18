import React, {useState} from 'react';
import Display from './Display';
import Keypad from './Keypad';
import Spacer from './Spacer';
import {nums, opps} from './Equate';


const CalcMain = () => {
    const [currNum, setCurrNum] = useState('');
    const [display, setDisplay] = useState('0');
    const [operand, setOpp] = useState('');
    const [equation, setEquation] = useState([]);

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
    };

    const handleNum = (num) => {
        let newNum = currNum + num;
        if (num === "0" && currNum.charAt(0) === "0") {
            return num
        } else {
            if (operand) {
                setEquation([...equation, operand]);
                setCurrNum(num);
                setDisplay(num);
                setOpp('');
            } else {
                setCurrNum(newNum);
                setDisplay(newNum);
            };
        };
    };

    const handleOpp = (opp) => {

        if (opp !== '-' && equation !== []) {
            setOpp(opp);   
        } else if (currNum === '') {
            setCurrNum('-');
        } else if (operand === '') {
            setOpp(opp);
        } else {
            setEquation([...equation, currNum, operand]);
            setCurrNum('-');
            setOpp('');
        }

        
    }
    
    return (
        <div className='calc-body'>
            <Display display={display}/>
            <Spacer />
            <Keypad 
                click={handleClick}
                clear={handleClear}
                />
        </div>
    )
};

export default CalcMain;