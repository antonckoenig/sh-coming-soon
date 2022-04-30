import logo from './logo.svg'

function Header() {
  return (
    <div className='flex items-center lg:gap-3 sh:gap-2 gap-2 lg:p-6 sh:p-4 p-4'>
      <img className='2xl:w-14 2xl:h-14 lg:w-12 lg:h-12 sh:w-10 w-10 h-10' alt='SocialHelix Logo' src={logo} />
      <p className='2xl:text-3xl lg:text-2xl sh:text-xl text-xl text-white font-semibold'>
        SocialHelix
      </p>
    </div>
  );
}

export default Header;