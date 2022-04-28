import logo from './logo.svg'

function Header() {
  return (
    <div className='flex items-center gap-3 p-6'>
      <img className='w-14 h-14' alt='SocialHelix Logo' src={logo} />
      <p className='text-3xl text-white font-semibold'>
        SocialHelix
      </p>
    </div>
  );
}

export default Header;