import React, {useState} from 'react';
import Display from './Display';
import Keypad from './Keypad';
import Spacer from './Spacer';
import {nums, opps} from './Equate';


const CalcMain = () => {
    const [currNum, setCurrNum] = useState('');
    const [display, setDisplay] = useState('1');
    const [opp, setOpp] = useState('');
    const [equation, setEquation] = useState([]);

    const handleClick = (event) => {
        let id = event.target.id
    
        switch(true) {
            case nums.includes(id):
            console.log('number', id);
            break;
            case opps.includes(id):
            console.log('operand', id);
            break;
            default:
            console.log("didn't work")
        };
    };

    const handleClear = () => {
        setDisplay('0');
        setEquation([]);
    };

    const handleNum = () => {
        
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