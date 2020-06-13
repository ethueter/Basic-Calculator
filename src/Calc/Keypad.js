import React from 'react';
import Key from './Key';

const Keypad = (props) => {
    
    return (
      <div className="keypad-container">
        <div className="keypad">
          <div id="seven" className="key-reg" onClick={props.click}>
            7
          </div>
          <div id="eight" className="key-reg" onClick={props.click}>
            8
          </div>
          <div id="nine" className="key-reg" onClick={props.click}>
            9
          </div>
          <div id="four" className="key-reg" onClick={props.click}>
            4
          </div>
          <div id="five" className="key-reg" onClick={props.click}>
            5
          </div>
          <div id="six" className="key-reg" onClick={props.click}>
            6
          </div>
          <div id="one" className="key-reg" onClick={props.click}>
            1
          </div>
          <div id="two" className="key-reg" onClick={props.click}>
            2
          </div>
          <div id="three" className="key-reg" onClick={props.click}>
            3
          </div>
          <div id="zero" className="key-big" onClick={props.click}>
            0
          </div>
          <div id="decimal" className="key-reg" onClick={props.click}>
            .
          </div>
        </div>
        <div id="one" className="key-reg" onClick={props.click}>
          1
        </div>
      </div>
    );
};

export default Keypad;