import { useState, useEffect } from 'react';
import axios from 'axios';
import validator from 'validator';
//import sendpulse from 'sendpulse-api';

function WaitlistForm({email, setEmail, setModalState}) {
  const [loading, setLoading] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  const handleSubmitEmail = () => {
    if (!loading) {
      if (!email || !validator.isEmail(email)) {
        setModalState(2);
      } else {
        const body = { email }
  
        axios.defaults.baseURL = "https://api.socialhelix.sh";
  
        setLoading(true);
  
        axios.post('/api/waitlist', body).then(res => {
          setModalState(1);
        }).catch(() => {
          setModalState(2);
        }).finally(() => {
          setLoading(false);
        });
      }
    }
  }

  return (
    <div className='absolute w-full h-full 2xl:pl-24 2xl:pt-24 xl:pl-20 xl:pt-20 lg:pl-16 lg:pt-16 md:pl-12 md:pt-12 sm:pl-8 sm:pt-8 wd:pt-8 sh:pt-0 pl-6 pt-6 pr-6'>
      <p className='text-white 2xl:text-7xl lg:text-6xl sm:text-5xl xs:text-4xl wd:text-5xl sh:text-3xl xxs:text-[1.8rem] text-[1.6rem] inline-block'>Invest in&nbsp;</p>
      <p className='text-white 2xl:text-7xl lg:text-6xl sm:text-5xl xs:text-4xl wd:text-5xl sh:text-3xl xxs:text-[1.8rem] text-[1.6rem] font-bold inline-block animate-text-paragraph' />
      <p className='2xl:mt-6 lg:mt-5 sm:mt-4 sh:mt-3 mt-3 text-white/80 2xl:text-2xl sm:text-xl sh:text-lg text-base'>Showing support shouldn't feel like spending.</p>
      <div className='2xl:mt-12 sh:mt-8 mt-10 flex 2xl:h-[4.5rem] lg:h-16 sm:h-14 sh:h-12 h-14 lg:w-fit rounded-xl'>
        <input className='bg-white/30 backdrop-blur-md text-white placeholder-white/75 outline-0 2xl:w-96 sm:w-80 w-full h-full 2xl:px-7 lg:px-6 px-4 rounded-l-xl rounded-r-none 2xl:text-xl lg:text-lg text-base' placeholder={width >= 325 ? 'Enter your email' : 'Email'} value={email} onChange={(e) => setEmail(e.target.value)}/>
        <div className={`relative bg-white ${loading ? '' : 'hover:bg-white/90 cursor-pointer'} text-[#3366ff] w-fit h-full 2xl:px-9 lg:px-7 sh:px-5 px-5 rounded-r-xl font-bold 2xl:text-lg lg:text-base sh:text-sm text-sm flex items-center select-none text-center`} onClick={handleSubmitEmail}>
          <span className={`${loading ? 'text-transparent' : ''}`}>Get&nbsp;Early Access</span>
          <div class={`absolute top-0 left-0 w-full h-full justify-center items-center ${loading ? 'flex' : 'hidden'}`}>
            <svg role="status" class="w-8 h-8 text-gray-200 animate-spin fill-[#3366FF]" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WaitlistForm;