import React from 'react';
import Display from './Display';
import Keypad from './Keypad';

const CalcMain = () => {
    
    return (
        <div className='calc-body'>
            <Display />
            <Keypad />
        </div>
    )
};

export default CalcMain;