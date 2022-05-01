import { useState, useEffect } from 'react';
import graph from './graph.svg';
import profilePic from './profile-pic.gif';

function GraphImage() {
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const animateSpan = document.getElementById('animate-stock-container');
      const style = window.getComputedStyle(animateSpan);
      const graphHeight = (window.innerHeight * 0.909) - (window.innerWidth >= 768 ? 0 : 280);
      setPrice(Math.round(parseInt(style.getPropertyValue('bottom')) * 100 / graphHeight));
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='absolute w-full h-full overflow-hidden vsh:hidden'>
      <div className='absolute w-full md:h-[90.9%] h-[calc(90.9%-280px)] bottom-0 left-0'>
        <img className='absolute w-full h-full' src={graph} alt='Stock Graph' />
        <div id='animate-stock-container' className='absolute 2xl:w-16 lg:w-14 sm:w-12 w-10 2xl:h-[5.75rem] lg:h-[5.25rem] sm:h-[4.5rem] sh:h-16 h-16 2xl:translate-y-8 2xl:-translate-x-8 lg:translate-y-7 lg:-translate-x-7 sm:translate-y-6 sm:-translate-x-6 sh:translate-y-5 sh:-translate-x-5 translate-y-5 -translate-x-5 animate-stock-container'>
          <p className='text-white text-center lg:h-7 sh:h-6 h-6 pr-[0.18rem] lg:text-lg sh:text-base text-base'>${price}</p>
          <img className='border-solid border-[#A7B3F9] rounded-full border-2 2xl:w-16 lg:w-14 sm:w-12 sh:w-10 w-10 2xl:h-16 lg:h-14 sm:h-12 sh:h-10 h-10' src={profilePic} alt='Profile Montage' />
        </div>
      </div>
    </div>
  );
}

export default GraphImage;