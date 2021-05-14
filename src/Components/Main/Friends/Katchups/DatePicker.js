import React from 'react';
import { MtrDatepicker } from "./mtr-datepicker.min.js"

const DatePicker = () => { 

  let demo = new MtrDatepicker({
    target: 'datepicker'
  })

  return (    
    <div className='datePicker'>         
    </div>  
  );
};

export default DatePicker;