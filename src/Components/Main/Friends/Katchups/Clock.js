import React, { useEffect, useState } from 'react';
import "./clock.scoped.css"

const Clock = () => {

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(
      () => setTime(new Date()),
      1000
    );

    let ampm = ""
    let hr = hour12()
    const min = time.getMinutes().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    const sec = time.getSeconds();
    

    function hour12() {
      let hour = time.getHours();

      if(hour < 12) {
        ampm = "am"
      }
  
      if(hour >= 12) {
        hour = hour-12;
        ampm = "pm"
      }
  
      if(hour === 0) {
        hour = 12;
      }
      return hour;
    }
  
    const hourHand = document.getElementById("hourHand")
    const minuteHand = document.getElementById("minuteHand")
    const secondHand = document.getElementById("secondHand")
    const digital = document.getElementById("digital")
  
    hourHand.style.transform = `rotate(${hr*30 + min*0.5 - 180}deg)`
    minuteHand.style.transform = `rotate(${min*6 - 180}deg)`
    secondHand.style.transform = `rotate(${sec*6 - 180}deg)`
    digital.innerHTML = hr + " : " + min + " " + ampm

    return () => {
      clearInterval(interval);
    }
  }, [time]);

  return (
    <div>
      <div id="digital" className="digital"></div>
      <div className="clock"> 
        <div className="face">
          <div id="secondHand" className="hand second"></div>   
          <div id="minuteHand" className="hand minute"></div>
          <div id="hourHand" className="hand hour"></div>
          <div className="hand center"></div>  
        </div>      
      </div>
    </div>
  );
};

export default Clock;