import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { LuX } from 'react-icons/lu';

function Modal({ children, isOpen, handleClose }) {
  useEffect(() => {
    function fn(e) {
      if (e.key === 'Escape') {
        handleClose();
      }
    }
    document.documentElement.addEventListener('keyup', fn);
    return function () {
      document.documentElement.removeEventListener('keyup', fn);
    };
  }, [handleClose]);
  if (!isOpen) return null;

  return createPortal(
    <div
      onClick={handleClose}
      className='z-50 fixed inset-0 flex justify-center items-center bg-black/40 backdrop-blur-xs p-4'
    >
      <div className='relative bg-white shadow-xl p-6 rounded-xl w-full max-w-4xl' onClick={(e) => e.stopPropagation()}>
        <button
          onClick={handleClose}
          className='top-4 left-4 absolute hover:bg-slate-100 p-2 border border-slate-200 rounded-lg text-slate-500 transition-colors cursor-pointer'
          aria-label='بستن پنجره'
        >
          <LuX size={20} />
        </button>

        {children}
      </div>
    </div>,
    document.getElementById('modal'),
  );
}

export default Modal;
