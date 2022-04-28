import { useState } from 'react';
import axios from 'axios';
//import sendpulse from 'sendpulse-api';

function WaitlistForm({animate}) {
  const [email, setEmail] = useState('');

  const handleSubmitEmail = () => {
    const body = { email }
    axios.post('/api/waitlist', body).then(console.log);
  }

  return (
    <div className='absolute w-full h-full pl-24 pt-24'>
      <h1 className='text-white text-7xl inline-block'>Invest in&nbsp;</h1>
      <h1 className={`text-white text-7xl font-bold inline-block ${animate && 'animate-text-paragraph'}`} />
      <p className='mt-6 text-white/80 text-2xl'>A community investment app powered by Web3.</p>
      <div className='mt-12 flex h-[4.5rem] w-fit rounded-xl'>
        <input className='bg-white/[.15] backdrop-blur-md text-white placeholder-white/50 outline-0 w-96 h-full px-7 rounded-l-xl text-xl' placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)}/>
        <button className='bg-white hover:bg-white/90 text-[#3366ff] w-fit h-full px-9 rounded-r-xl font-bold text-lg' onClick={handleSubmitEmail}>Get Early Access</button>
      </div>
    </div>
  );
}

export default WaitlistForm;