import { useState, useEffect } from 'react';
import WaitlistForm from './WaitlistForm';
import Footer from './Footer';
import Header from './Header';
import GraphImage from './GraphImage'

function App() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='absolute w-full h-full bg-gradient-to-br from-[#33A9FF] via-[#3366ff] to-[#450FDF]'>
      <div className='absolute w-full h-full bottom-0 left-0'>
        <GraphImage animate={animate} />
      </div>
      <div className='relative w-full h-28'>
        <Header />
      </div>
      <div className='relative w-full h-[calc(100%-14rem)]'>
        <WaitlistForm animate={animate} />
      </div>
      <div className='relative w-full h-28'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
