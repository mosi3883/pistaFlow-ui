import { LuPencil, LuTrash2 } from 'react-icons/lu';

import deliveries from './enteries';
function DeliveryTable() {
  return (
    <>
      <table className='w-full'>
        <thead className='bg-slate-50 text-muted'>
          <tr className='border-slate-100 border-b'>
            <th className='px-4 py-3 text-xs text-right'>تاریخ</th>
            <th className='px-4 py-3 text-xs text-right'>کد</th>
            <th className='px-4 py-3 text-xs text-right'>نام مشتری</th>
            <th className='px-4 py-3 text-xs text-right'>نوع پسته</th>
            <th className='px-4 py-3 text-xs text-right'>وزن پر</th>
            <th className='px-4 py-3 text-xs text-right'>وزن خالی</th>
            <th className='px-4 py-3 text-xs text-right'>وزن خالص</th>
            <th className='px-4 py-3 text-xs text-center'>عملیات</th>
          </tr>
        </thead>
        <tbody>
          {deliveries.map((delivery) => (
            <tr
              className='hover:bg-slate-50 border-border/30 border-b transition-colors duration-150'
              key={delivery.id}
            >
              <td className='px-4 py-4 text-sm text-right'>{delivery.date}</td>
              <td className='px-4 py-4 text-sm text-right'>{delivery.code}</td>
              <td className='px-4 py-4 text-sm text-right'>{delivery.customerName}</td>
              <td className='px-4 py-4 text-sm text-right'>{delivery.pistaType}</td>
              <td className='px-4 py-4 text-sm text-right'>{delivery.grossWeight}</td>
              <td className='px-4 py-4 text-sm text-right'>{delivery.tareWeight}</td>
              <td className='px-4 py-4 text-sm text-right'>{delivery.netWeight}</td>
              <td className='px-4 py-4 text-sm text-right'>
                <div className='flex justify-center gap-3'>
                  <button className='p-2 cursor-pointer'>
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
    </>
  );
}

export default DeliveryTable;
