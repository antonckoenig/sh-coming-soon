import { useState, useEffect } from 'react';
import axios from 'axios';
//import sendpulse from 'sendpulse-api';

function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  const handleSubmitEmail = () => {
    const body = { email }
    axios.defaults.baseURL = "https://api.socialhelix.sh";
    axios.post('/api/waitlist', body).then(console.log);
  }

  return (
    <div className='absolute w-full h-full 2xl:pl-24 2xl:pt-24 xl:pl-20 xl:pt-20 lg:pl-16 lg:pt-16 md:pl-12 md:pt-12 sm:pl-8 sm:pt-8 wd:pt-8 sh:pt-0 pl-6 pt-6 pr-6'>
      <p className='text-white 2xl:text-7xl lg:text-6xl sm:text-5xl xs:text-4xl wd:text-5xl sh:text-3xl xxs:text-[1.8rem] text-[1.6rem] inline-block'>Invest in&nbsp;</p>
      <p className='text-white 2xl:text-7xl lg:text-6xl sm:text-5xl xs:text-4xl wd:text-5xl sh:text-3xl xxs:text-[1.8rem] text-[1.6rem] font-bold inline-block animate-text-paragraph' />
      <p className='2xl:mt-6 lg:mt-5 sm:mt-4 sh:mt-3 mt-3 text-white/80 2xl:text-2xl sm:text-xl sh:text-lg text-base'>The modern day trading card. Powered by crypto.</p>
      <div className='2xl:mt-12 sh:mt-8 mt-10 flex 2xl:h-[4.5rem] lg:h-16 sm:h-14 sh:h-12 h-14 lg:w-fit rounded-xl'>
        <input className='bg-white/30 backdrop-blur-md text-white placeholder-white/75 outline-0 2xl:w-96 sm:w-80 w-full h-full 2xl:px-7 lg:px-6 px-4 rounded-l-xl rounded-r-none 2xl:text-xl lg:text-lg text-base' placeholder={width >= 325 ? 'Enter your email' : 'Email'} value={email} onChange={(e) => setEmail(e.target.value)}/>
        <button className='bg-white hover:bg-white/90 text-[#3366ff] w-fit h-full 2xl:px-9 lg:px-7 sh:px-5 px-5 rounded-r-xl font-bold 2xl:text-lg lg:text-base sh:text-sm text-sm' onClick={handleSubmitEmail}>Get&nbsp;Early Access</button>
      </div>
    </div>
  );
}

export default WaitlistForm;