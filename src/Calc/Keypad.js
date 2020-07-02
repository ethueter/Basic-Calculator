import React from 'react';


const Keypad = (props) => {
    
    return (
      <div className="keypad-container">
        <div className="keypad" >
          <button
            id="seven"
            className="key-reg"
            onClick={props.click}
            
          >
            7
          </button>
          <button
            id="eight"
            className="key-reg"
            onClick={props.click}
            
          >
            8
          </button>
          <button id="nine" className="key-reg" onClick={props.click} >
            9
          </button>
          <button id="four" className="key-reg" onClick={props.click}>
            4
          </button>
          <button id="five" className="key-reg" onClick={props.click}>
            5
          </button>
          <button id="six" className="key-reg" onClick={props.click}>
            6
          </button>
          <button id="one" className="key-reg" onClick={props.click}>
            1
          </button>
          <button id="two" className="key-reg" onClick={props.click}>
            2
          </button>
          <button id="three" className="key-reg" onClick={props.click}>
            3
          </button>
          <button id="zero" className="key-big" onClick={props.click}>
            0
          </button>
          <button id="decimal" className="key-reg" onClick={props.click}>
            .
          </button>
        </div>
        <div className="keypad-opps">
          <button id="clear" className="key-big" onClick={props.click}>
            Clear
          </button>
          <button id="add" className="key-reg" onClick={props.click}>
            +
          </button>
          <button id="sub" className="key-reg" onClick={props.click}>
            -
          </button>
          <button id="multiply" className="key-reg" onClick={props.click}>
            *
          </button>
          <button id="divide" className="key-reg" onClick={props.click}>
            /
          </button>
          <button id="equate" className="key-big" onClick={props.click}>
            =
          </button>
        </div>
      </div>
    );
};

export default Keypad;