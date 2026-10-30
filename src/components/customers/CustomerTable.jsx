import { LuPencil, LuTrash2 } from 'react-icons/lu';
import { Link } from 'react-router';

function CustomerTable() {
  return (
    <table className='w-full'>
      <thead className='bg-slate-50 text-muted'>
        <tr className='border-slate-100 border-b'>
          <th className='px-4 py-3 text-xs text-right'>نام مشتری</th>
          <th className='px-4 py-3 text-xs text-right'>شماره تلفن</th>
          <th className='px-4 py-3 text-xs text-center'>عملیات</th>
        </tr>
      </thead>
      <tbody>
        <tr className='hover:bg-slate-50 border-slate-100 border-b transition-colors duration-150'>
          <td className='px-4 py-4 text-sm text-right'>محمد احمدی</td>
          <td className='px-4 py-4 text-sm text-right'>0123456789</td>
          <td className='px-4 py-4 text-sm text-right'>
            <div className='flex justify-center gap-3'>
              <Link to='#' className='p-2'>
                <LuPencil size={20} />
              </Link>
              <button className='p-2 cursor-pointer'>
                <LuTrash2 size={20} className='text-red-700 hover:text-red-500 transition-colors duration-150' />
              </button>
            </div>
          </td>
        </tr>
        <tr className='hover:bg-slate-50 border-slate-100 border-b transition-colors duration-150'>
          <td className='px-4 py-4 text-sm text-right'>علی رضایی</td>
          <td className='px-4 py-4 text-sm text-right'>0123456780</td>
          <td className='px-4 py-4 text-sm text-right'>
            <div className='flex justify-center gap-3'>
              <Link to='#' className='p-2'>
                <LuPencil size={20} />
              </Link>
              <button className='p-2 cursor-pointer'>
                <LuTrash2 size={20} className='text-red-700 hover:text-red-500 transition-colors duration-150' />
              </button>
            </div>
          </td>
        </tr>
        <tr className='hover:bg-slate-50 transition-colors duration-150'>
          <td className='px-4 py-4 text-sm text-right'>حاج غلامعلی احمدآبادی</td>
          <td className='px-4 py-4 text-sm text-right'>0123456781</td>
          <td className='px-4 py-4 text-sm text-right'>
            <div className='flex justify-center gap-3'>
              <Link to='#' className='p-2'>
                <LuPencil size={20} />
              </Link>
              <button className='p-2 cursor-pointer'>
                <LuTrash2 size={20} className='text-red-700 hover:text-red-500 transition-colors duration-150' />
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default CustomerTable;
