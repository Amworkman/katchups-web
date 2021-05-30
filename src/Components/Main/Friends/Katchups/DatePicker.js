import React, { useState, useMemo } from 'react';
import { MtrDatepicker } from "./mtr-datepicker.min.js"
import "./datePicker.scoped.css"
import Clock from "./Clock"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltUp, faLongArrowAltRight} from '@fortawesome/free-solid-svg-icons'

const DatePicker = () => { 

  const datePicker = useMemo(() => new MtrDatepicker({
    target: 'datepicker'
  }), []);

  const [time, setTime] = useState(datePicker.getFullTime());
  const [date, setDate] = useState(datePicker.toDateString().slice(0, -5));  

  setInterval(() => {
    if(time !== datePicker.getFullTime()){
      setTime(datePicker.getFullTime())
    }
    if(date !== datePicker.toDateString().slice(0, -5)){
      setDate(datePicker.toDateString().slice(0, -5))
    }
  }, 1000);
  
  return ( 
    <div>
      <div className='datePicker'>    
      </div>      
      <div className="dateBoxLeft">
        <Clock/>        
        <button className="button now" >katchup now</button>
        <div className="arrow arrowUp">
          <FontAwesomeIcon icon={faLongArrowAltUp} />
        </div>
        <h2>or</h2>
        <div className="arrow arrowRight">
          <FontAwesomeIcon icon={faLongArrowAltRight} />
        </div>
        <button className="button setDate">katchup at {time} on {date}</button>
      </div>
      <div className="dateBoxRight">
      </div>
      
    </div>  
  );
};

export default DatePicker;