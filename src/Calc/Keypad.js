import React from 'react';


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
            <div className='keypad-opps'>
                <div id="clear" className="key-big" onClick={props.clear}>
                    Clear
                </div>
                <div id="add" className="key-reg" onClick={props.click}>
                    +
                </div>
                <div id="sub" className="key-reg" onClick={props.click}>
                    -
                </div>
                <div id="multiply" className="key-reg" onClick={props.click}>
                    *
                </div>
                <div id="divide" className="key-reg" onClick={props.click}>
                    /
                </div>
                <div id="equate" className="key-big" onClick={props.click}>
                    =
                </div>
            </div>
        
      </div>
    );
};

export default Keypad;