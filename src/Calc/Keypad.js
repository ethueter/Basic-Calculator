import React from 'react';
import Key from './Key';

const Keypad = (props) => {
    
    return (
        <div className='keypad'>
            <Key
            click={props.click}  />
        </div>
    )
};

export default Keypad;