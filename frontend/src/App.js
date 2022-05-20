import { useState } from 'react';
import WaitlistForm from './WaitlistForm';
import Footer from './Footer';
import Header from './Header';
import GraphImage from './GraphImage'
import ConfirmationModal from './ConfirmationModal';

function App() {
  const [email, setEmail] = useState('');
  const [modalState, setModalState] = useState(0);
  const referral = '';
  
  return (
    <div className='absolute w-full h-full bg-gradient-to-br from-[#33A9FF] via-[#3366ff] to-[#344ce8]'>
      <div className='absolute w-full h-full bottom-0 left-0'>
        <GraphImage />
      </div>
      <div className='relative w-full 2xl:h-28 lg:h-24 sh:h-20 h-20'>
        <Header />
      </div>
      <div className='relative w-full 2xl:h-[calc(100%-14rem)] lg:h-[calc(100%-12rem)] sh:h-[calc(100%-10rem)] h-[calc(100%-10rem)]'>
        <WaitlistForm email={email} setEmail={setEmail} referral={referral} setModalState={setModalState} />
      </div>
      <div className='relative w-full 2xl:h-28 lg:h-24 sh:h-20 h-20'>
        <Footer />
      </div>

      <ConfirmationModal email={email} modalState={modalState} setModalState={setModalState} />
    </div>
  );
}

export default App;
