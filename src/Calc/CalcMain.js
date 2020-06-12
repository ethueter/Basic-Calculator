import React, {useState} from 'react';
import Display from './Display';
import Keypad from './Keypad';
import Spacer from './Spacer';
import {nums, opps} from './Equate';


const CalcMain = () => {
    const {currNum, setCurrNum} = useState('');
    const {display, setDisplay} = useState('');
    const {opp, setOpp} = useState('');
    const {equation, setEquation} = useState([]);

    const handleClick =()=> {
        console.log( nums)
    }
    
    return (
        <div className='calc-body'>
            <Display />
            <Spacer />
            <Keypad click={handleClick}/>
        </div>
    )
};

export default CalcMain;