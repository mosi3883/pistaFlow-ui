import { useState } from 'react';
import Modal from '../../ui/Modal';
import CreateCustomerForm from './CreateCustomerForm';

function CustomerHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <header className='flex justify-between items-center mb-6'>
      <div>
        <h2 className='mb-2 font-semibold text-heading text-2xl'>مشتریان</h2>
        <p className='text-muted text-sm'>مدیریت اطلاعات مشتریان کارخانه</p>
      </div>
      <button
        className='flex justify-center items-center bg-primary hover:bg-blue-700 px-4 rounded-lg h-10 text-white transition-colors duration-150 cursor-pointer'
        onClick={() => setIsModalOpen(true)}
      >
        + مشتری جدید
      </button>
      <Modal isOpen={isModalOpen} handleClose={() => setIsModalOpen(false)}>
        <h3>افزودن مشتری</h3>
        <CreateCustomerForm />
      </Modal>
    </header>
  );
}

export default CustomerHeader;
