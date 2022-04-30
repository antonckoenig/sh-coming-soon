import WaitlistForm from './WaitlistForm';
import Footer from './Footer';
import Header from './Header';
import GraphImage from './GraphImage'

function App() {
  return (
    <div className='absolute w-full h-full bg-gradient-to-br from-[#29d2a8] via-[#3366ff] to-[#5934dd]'>
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
