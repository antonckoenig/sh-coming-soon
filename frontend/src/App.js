import WaitlistForm from './WaitlistForm';
import Footer from './Footer';
import Header from './Header';
import GraphImage from './GraphImage'
import { useState, useRef, useEffect } from 'react';
import * as THREE from 'three'
import FOG from 'vanta/dist/vanta.fog.min.js';

function App() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const background = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(FOG({
        el: background.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        highlightColor: 0x33a9ff,
        midtoneColor: 0x3366ff,
        lowlightColor: 0x4538dd,
        baseColor: 0x3366ff,
        blurFactor: 0.70,
        speed: 2.00,
        zoom: 0.70,
        THREE: THREE
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    }
  }, [vantaEffect]);

  return (
    <div className='absolute w-full h-full bg-gradient-to-br from-[#33A9FF] via-[#3366ff] to-[#3f34dd]' ref={background}>
      <div className='absolute w-full h-full bottom-0 left-0'>
        <GraphImage />
      </div>
      <div className='relative w-full 2xl:h-28 lg:h-24 sh:h-20 h-20'>
        <Header />
      </div>
      <div className='relative w-full 2xl:h-[calc(100%-14rem)] lg:h-[calc(100%-12rem)] sh:h-[calc(100%-10rem)] h-[calc(100%-10rem)]'>
        <WaitlistForm />
      </div>
      <div className='relative w-full 2xl:h-28 lg:h-24 sh:h-20 h-20'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
