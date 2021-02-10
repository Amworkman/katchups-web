import React from 'react';
import './LoadingCarousel.scoped.scss'

const LoadingCarousel = () => {
  return (
      <div id="contain">
        <div className='wrap' id='wrap1'>
          <div className='ball' id='ball1'></div>
        </div>

        <div className='wrap' id='wrap2'>
          <div className='ball' id='ball2'></div>
        </div>
        
        <div className='wrap' id='wrap3'>
          <div className='ball' id='ball3'></div>
        </div>
        
        <div className='wrap' id='wrap4'>
          <div className='ball' id='ball4'></div>
        </div>
      </div>    
  );
};

export default LoadingCarousel;