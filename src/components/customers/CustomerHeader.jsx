import { useState } from 'react';
import Modal from '../../ui/Modal';
import CreateCustomerForm from './CreateCustomerForm';
import Button from '../../ui/Button';

function CustomerHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <header className='flex justify-between items-center mb-6'>
      <div>
        <h2 className='mb-2 font-semibold text-heading text-2xl'>مشتریان</h2>
        <p className='text-muted text-sm'>مدیریت اطلاعات مشتریان کارخانه</p>
      </div>
      <Button variant='primary' onClick={() => setIsModalOpen(true)}>
        + مشتری جدید
      </Button>
      <Modal isOpen={isModalOpen} handleClose={() => setIsModalOpen(false)} className='max-w-md'>
        <h3 className='mb-4 font-semibold text-heading'>افزودن مشتری</h3>
        <CreateCustomerForm />
      </Modal>
    </header>
  );
}

export default CustomerHeader;
