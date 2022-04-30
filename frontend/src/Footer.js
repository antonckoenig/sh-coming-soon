import { AiFillInstagram, AiOutlineTwitter, AiOutlineFacebook } from 'react-icons/ai';
import { CgFacebook } from 'react-icons/cg';
import { IoLogoFacebook } from 'react-icons/io'
import { MdOutlineFacebook } from 'react-icons/md';
import { RiLinkedinFill, RiFacebookFill } from 'react-icons/ri';

function Footer() {
  return (
    <>
      <div className='absolute lg:right-2 lg:bottom-2 sh:right-1 sh:bottom-1 right-1 bottom-1 w-fit h-fit lg:p-4 p-3 flex lg:gap-6 sm:gap-5 sh:gap-4 gap-4 lg:text-4xl sh:text-3xl text-3xl text-white'>
        <a href='https://www.facebook.com/socialhelixofficial' target="_blank" className='lg:text-[2.1rem] sh:text-[1.75rem] text-[1.75rem]'><CgFacebook /></a>
        <a href='https://www.twitter.com/socialhelixinc' target="_blank"><AiOutlineTwitter /></a>
        <a href='https://www.instagram.com/socialhelixinc/' target="_blank"><AiFillInstagram /></a>
        <a href='https://www.linkedin.com/company/socialhelix/' target="_blank"><RiLinkedinFill /></a>
      </div>
    </>
  );
}

export default Footer;