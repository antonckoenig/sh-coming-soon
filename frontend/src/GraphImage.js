import graph from './graph.svg';
import profilePic from './profile-pic.png';

function GraphImage({animate}) {
  return (
    <div className='absolute w-full h-full overflow-hidden'>
      <div className='absolute w-full h-[90.9%] bottom-0 left-0'>
        <img className='absolute w-full h-full' src={graph} />
        <div className={`absolute w-16 h-[5.75rem] translate-y-8 -translate-x-8 ${animate ? 'animate-stock-container' : 'hidden'}`}>
          <p className='text-white text-center h-7 pr-[0.18rem] text-lg'>$<span className={`${animate ? 'animate-stock-price' : 'hidden'}`}/></p>
          <img className='border-solid border-white rounded-full border-4 w-16 h-16' src={profilePic} alt='Profile Picture Gif' />
        </div>
      </div>
    </div>
  );
}

export default GraphImage;