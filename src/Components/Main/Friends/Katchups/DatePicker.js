import React, { useState, useMemo } from 'react';
import { MtrDatepicker } from "./mtr-datepicker.min.js"
import "./datePicker.scoped.css"
import Clock from "./Clock"
import Location from "./Location"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'

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
        <h2>Location</h2> 
        <Location/>
        <i className="fa fa-long-arrow-right arrowBigBack arrowRight" ></i>
        <i className="fa fa-long-arrow-right arrowBig arrowRight" ></i>
        <button className="button setDate">katchup at {time} on {date}</button>
      </div>
      <div className="dateBoxRight">
      </div>
      
    </div>  
  );
};

export default DatePicker;