import React, { useEffect } from 'react';
import Modal from 'react-modal';
import { IoMdClose } from 'react-icons/io';

const modalStyle = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.85)'
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    borderRadius: '20px',
    padding: '0px',
    maxWidth: 'min(90%, 500px)'
  },
};

Modal.setAppElement('#root');

function ConfirmationModal({email, modalState, setModalState}) {
  return (
    <Modal
      isOpen={modalState !== 0}
      onRequestClose={() => setModalState(0)}
      style={modalStyle}
      contentLabel="Waitlist Confirmation"
    >
      <div className='absolute top-2 right-2 w-7 h-7 flex items-center bg-gray-700 hover:bg-gray-800 cursor-pointer text-white rounded-full text-base'>
        <IoMdClose onClick={() => setModalState(0)} className='mx-auto' />
      </div>
      <div className='w-full'>
        <h1 className='mr-10 p-4 font-semibold text-xl'>
          {modalState === 1 ? 'Thanks for your interest!' : 'Registration failed :('}
        </h1>
        <div className='w-full h-[1px] bg-gray-300' />
        {modalState === 1 ?
          <>
            <p className='p-4 text-base'>
              You have been officially registered to the SocialHelix waitlist with the following email:
            </p>
            <p className='px-4 pb-4 text-base text-center text-[#3366ff]'>
              {email}
            </p>
            <p className='px-4 pb-4 text-base'>
              A confirmation email should arrive in your inbox shortly. If you can't find it, check your spam folder.
            </p>
          </>
        :
          <p className='p-4 text-base'>
            Make sure that you entered a valid email.
          </p>
        }
      </div>
    </Modal>
  );
}

export default ConfirmationModal;