import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { LuX } from 'react-icons/lu';
import Button from './Button';

function Modal({ children, isOpen, handleClose, className }) {
  useEffect(() => {
    if (!isOpen) return;
    function fn(e) {
      if (e.key === 'Escape') {
        handleClose();
      }
    }
    document.documentElement.addEventListener('keyup', fn);
    return function () {
      document.documentElement.removeEventListener('keyup', fn);
    };
  }, [handleClose, isOpen]);
  if (!isOpen) return null;
  return createPortal(
    <div
      onClick={handleClose}
      className='z-50 fixed inset-0 flex justify-center items-center bg-black/40 backdrop-blur-xs p-4'
    >
      <div
        className={`relative bg-white shadow-xl p-6 rounded-xl w-full ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        <Button
          onClick={handleClose}
          size='sm'
          variant='secondary'
          className='top-4 left-4 absolute'
          aria-label='بستن پنجره'
        >
          <LuX size={20} />
        </Button>

        {children}
      </div>
    </div>,
    document.getElementById('modal'),
  );
}

export default Modal;
