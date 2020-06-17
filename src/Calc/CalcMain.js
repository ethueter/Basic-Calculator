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

    const handleClick =()=> {
        console.log('I am clicked')
    }

    const handleClear = () => {
        setDisplay('0')
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