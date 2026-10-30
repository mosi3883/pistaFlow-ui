import { LuPencil, LuTrash2 } from 'react-icons/lu';
import { Link } from 'react-router';

function CustomerTable() {
  return (
    <table className='border w-full'>
      <thead className='bg-slate-800 text-white'>
        <tr>
          <th className='p-3 text-xs text-center'>نام مشتری</th>
          <th className='p-3 text-xs text-center'>شماره تلفن</th>
          <th className='p-3 text-xs text-center'>عملیات</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className='p-4 text-sm text-center'>محمد احمدی</td>
          <td className='p-4 text-sm text-center'>0123456789</td>
          <td className='flex justify-center gap-3 p-4 text-sm'>
            <Link to='#'>
              <LuPencil size={15} />
            </Link>
            <button className='cursor-pointer'>
              <LuTrash2 size={15} className='text-red-700 hover:text-red-500 transition-colors duration-150' />
            </button>
          </td>
        </tr>
        <tr className='bg-slate-100'>
          <td className='p-4 text-sm text-center'>علی رضایی</td>
          <td className='p-4 text-sm text-center'>0123456780</td>
          <td></td>
        </tr>
        <tr>
          <td className='p-4 text-sm text-center'>حاج غلامعلی احمدآبادی</td>
          <td className='p-4 text-sm text-center'>0123456781</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
}

export default CustomerTable;
