import React from 'react';
import { MtrDatepicker } from './mtr-datepicker/dist/mtr-datepicker.min.js'
import './mtr-datepicker/dist/mtr-datepicker.min.css'
import './mtr-datepicker/dist/mtr-datepicker.default-theme.min.css'


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