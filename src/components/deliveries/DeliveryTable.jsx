import { LuPencil, LuTrash2 } from 'react-icons/lu';

import deliveries from './entries';
function DeliveryTable({ latest = false }) {
  let allDeliveries = latest
    ? deliveries
        .slice()
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 5)
    : deliveries;
  return (
    <>
      <table className='w-full'>
        <thead className='bg-slate-50 text-muted'>
          <tr className='border-slate-100 border-b'>
            <th className='px-4 py-3 text-xs text-right'>تاریخ</th>
            <th className='px-4 py-3 text-xs text-right'>کد</th>
            <th className='px-4 py-3 text-xs text-right'>نام مشتری</th>
            <th className='px-4 py-3 text-xs text-right'>نوع پسته</th>
            {latest ? (
              ''
            ) : (
              <>
                <th className='px-4 py-3 text-xs text-right'>وزن پر</th>
                <th className='px-4 py-3 text-xs text-right'>وزن خالی</th>
              </>
            )}
            <th className='px-4 py-3 text-xs text-right'>وزن خالص</th>
            {latest ? '' : <th className='px-4 py-3 text-xs text-center'>عملیات</th>}
          </tr>
        </thead>
        <tbody>
          {allDeliveries.map((delivery) => (
            <tr
              className='hover:bg-slate-50 border-border/30 border-b transition-colors duration-150'
              key={delivery.id}
            >
              <td className='px-4 py-4 text-sm text-right'>
                {Intl.DateTimeFormat('fa-IR', { dateStyle: 'medium', timeZone: 'UTC' }).format(new Date(delivery.date))}
              </td>
              <td className='px-4 py-4 text-sm text-right'>{delivery.code}</td>
              <td className='px-4 py-4 text-sm text-right'>{delivery.customerName}</td>
              <td className='px-4 py-4 text-sm text-right'>{delivery.pistaType}</td>
              {latest ? (
                ''
              ) : (
                <>
                  <td className='px-4 py-4 text-sm text-right'>
                    {Intl.NumberFormat('fa-IR').format(delivery.grossWeight)}
                  </td>
                  <td className='px-4 py-4 text-sm text-right'>
                    {delivery.tareWeight !== null ? Intl.NumberFormat('fa-IR').format(delivery.tareWeight) : '-'}
                  </td>
                </>
              )}
              <td className='px-4 py-4 text-sm text-right'>
                {' '}
                {delivery.tareWeight !== null ? Intl.NumberFormat('fa-IR').format(delivery.netWeight) : '-'}
              </td>
              {latest ? (
                ''
              ) : (
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
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default DeliveryTable;
