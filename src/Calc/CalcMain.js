import React, {useState} from 'react';
import Display from './Display';
import Keypad from './Keypad';
import Spacer from './Spacer';

const nums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const opps = ['add', 'sub', 'multiply', 'divide'];

const CalcMain = () => {
    const {currNum, setCurrNum} = useState('');
    const {display, setDisplay} = useState('');
    const {opp, setOpp} = useState('');
    const {equation, setEquation} = useState([]);
    
    return (
        <div className='calc-body'>
            <Display />
            <Spacer />
            <Keypad />
        </div>
    )
};

export default CalcMain;