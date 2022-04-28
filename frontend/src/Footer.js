import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { RiLinkedinFill } from 'react-icons/ri';

function Footer() {
  return (
    <>
      <div className='absolute right-2 bottom-2 w-fit h-fit p-4 flex gap-6 text-4xl text-white'>
        <a href='https://www.twitter.com/socialhelixinc' target="_blank"><AiOutlineTwitter /></a>
        <a href='https://www.instagram.com/socialhelixinc/' target="_blank"><AiFillInstagram /></a>
        <a href='https://www.linkedin.com/company/socialhelix/' target="_blank"><RiLinkedinFill /></a>
      </div>
    </>
  );
}

export default Footer;