import React, { useState, useMemo } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { MtrDatepicker } from "./mtr-datepicker.min.js"
import "./datePicker.scoped.css"
import Clock from "./Clock"
import Location from "./Location"
import { createKatchup } from '../../../../../Actions/KatchupActions'
import KatchupCard from '../katchup/KatchupCard'

const DatePicker = (props) => { 

  let datePicker = useMemo(() => new MtrDatepicker({
    target: 'datepicker'
  }), []);

  const [time, setTime] = useState(datePicker.getFullTime());
  const [date, setDate] = useState(datePicker.toDateString().slice(0, -5)); 
  const [location, setLocation] = useState("");
  const [cardState, setCardState] = useState('showDatePicker');
  const friendID = props.friendID
  const storeDispatch = useDispatch()

  setInterval(() => {
    if(time !== datePicker.getFullTime()){
      setTime(datePicker.getFullTime())
    }
    if(date !== datePicker.toDateString().slice(0, -5)){
      setDate(datePicker.toDateString().slice(0, -5))
    }
  }, 1000);

  const handleClick = () => {
    storeDispatch(createKatchup(friendID, datePicker.toString(), location))
    setCardState("showKatchupCard")
    datePicker.destroy()
  }

  const updateLocation = (katchupLocation) => {
    setLocation(katchupLocation)    
  }
  
  return ( 
    <div>        
      <div>
        <div id='datePicker' className='datePicker'>    
        </div>  
        <KatchupCard />      
        <div className={`dateBoxLeft ${cardState}`}>
          <Clock/> 
          <h2>Location</h2> 
          <Location updateLocation={updateLocation}/>
          <i className="fa fa-long-arrow-right arrowBigBack arrowRight" ></i>
          <i className="fa fa-long-arrow-right arrowBig arrowRight" ></i>
          <button className="button setDate" onClick={handleClick}>katchup at {time} on {date}</button>
        </div>
        <div className={`dateBoxRight ${cardState}`}>
        </div>      
      </div>       
    </div>    
  );
};

export default DatePicker;