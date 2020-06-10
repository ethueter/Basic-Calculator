import React from 'react';
import Display from './Display';
import Keypad from './Keypad';
import Spacer from './Spacer';

const CalcMain = () => {
    
    return (
        <div className='calc-body'>
            <Display />
            <Spacer />
            <Keypad />
        </div>
    )
};

export default CalcMain;