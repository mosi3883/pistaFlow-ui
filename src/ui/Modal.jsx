import { createPortal } from 'react-dom';
import { LuX } from 'react-icons/lu';

function Modal({ children, isOpen, handleClose }) {
  return createPortal(
    isOpen && (
      <div className='fixed inset-0 bg-black/40'>
        <div className='top-1/2 right-1/2 fixed bg-white p-6 max-w-md translate-1/2'>
          <button
            onClick={handleClose}
            className='top-1 left-1 fixed p-1 border border-slate-200 rounded-2xl cursor-pointer'
          >
            <LuX />
          </button>

          {children}
        </div>
      </div>
    ),
    document.getElementById('modal'),
  );
}

export default Modal;
