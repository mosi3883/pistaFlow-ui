import { useState } from 'react';
import Modal from '../../ui/Modal';
import Button from '../../ui/Button';
import CustomerForm from './CustomerForm';

function CustomerHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  function handleClose() {
    setIsModalOpen(false);
  }
  return (
    <header className='flex justify-between items-center mb-6'>
      <div>
        <h2 className='mb-2 font-semibold text-heading text-2xl'>مشتریان</h2>
        <p className='text-muted text-sm'>مدیریت اطلاعات مشتریان کارخانه</p>
      </div>
      <Button variant='primary' onClick={() => setIsModalOpen(true)}>
        + مشتری جدید
      </Button>
      <Modal isOpen={isModalOpen} handleClose={handleClose} className='max-w-md'>
        <h3 className='mb-4 font-semibold text-heading'>افزودن مشتری</h3>
        <CustomerForm handleClose={handleClose} />
      </Modal>
    </header>
  );
}

export default CustomerHeader;
