import { useState } from 'react';
import { LuPencil, LuTrash2 } from 'react-icons/lu';
import Modal from '../../ui/Modal';

import CustomerForm from './CustomerForm';

function CustomerTable({ search, customers }) {
  console.log(search);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const displayedCustomers = customers.filter(function (customer) {
    return search
      .trim()
      .split(/\s+/)
      .map((i) => customer.name.includes(i))
      .every(Boolean);
  });
  const [customer, setCustomer] = useState({});
  function handleEdit(id) {
    setCustomer(customers.find((c) => c.id === id));
    setIsModalOpen(true);
  }

  function handleClose() {
    setIsModalOpen(false);
  }

  return (
    <>
      <table className='w-full'>
        <thead className='bg-slate-50 text-muted'>
          <tr className='border-slate-100 border-b'>
            <th className='px-4 py-3 text-xs text-right'>نام مشتری</th>
            <th className='px-4 py-3 text-xs text-right'>شماره تلفن</th>
            <th className='px-4 py-3 text-xs text-center'>عملیات</th>
          </tr>
        </thead>
        <tbody>
          {displayedCustomers.map((customer) => (
            <tr
              className='hover:bg-slate-50 border-border/30 border-b transition-colors duration-150'
              key={customer.id}
            >
              <td className='px-4 py-4 text-sm text-right'>{customer.name}</td>
              <td className='px-4 py-4 text-sm text-right' dir='ltr'>
                {customer.phone}
              </td>
              <td className='px-4 py-4 text-sm text-right'>
                <div className='flex justify-center gap-3'>
                  <button className='p-2 cursor-pointer' onClick={() => handleEdit(customer.id)}>
                    <LuPencil size={20} />
                  </button>
                  <button className='p-2 cursor-pointer'>
                    <LuTrash2 size={20} className='text-red-700 hover:text-red-500 transition-colors duration-150' />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal isOpen={isModalOpen} handleClose={handleClose} className='max-w-md'>
        <CustomerForm editMode customer={customer} handleClose={handleClose} />
      </Modal>
    </>
  );
}

export default CustomerTable;
