import { LuPencil, LuTrash2 } from 'react-icons/lu';
import { Link } from 'react-router';
const customers = [
  { id: 1, name: 'محمد احمدی', phone: '09000000001' },
  { id: 2, name: 'علی رضایی', phone: '09000000002' },
  { id: 3, name: 'حسین محمدی', phone: '09000000003' },
  { id: 4, name: 'رضا کریمی', phone: '09000000004' },
  { id: 5, name: 'مهدی حسینی', phone: '09000000005' },
  { id: 6, name: 'احمد مرادی', phone: '09000000006' },
  { id: 7, name: 'مجید عباسی', phone: '09000000007' },
  { id: 8, name: 'حسن جعفری', phone: '09000000008' },
  { id: 9, name: 'امیر قاسمی', phone: '09000000009' },
  { id: 10, name: 'جواد موسوی', phone: '09000000010' },
  { id: 11, name: 'عباس اکبری', phone: '09000000011' },
  { id: 12, name: 'سعید صادقی', phone: '09000000012' },
  { id: 13, name: 'ناصر حیدری', phone: '09000000013' },
  { id: 14, name: 'کریم رستمی', phone: '09000000014' },
  { id: 15, name: 'بهرام شریفی', phone: '09000000015' },
  { id: 16, name: 'فرهاد رحیمی', phone: '09000000016' },
  { id: 17, name: 'حامد سلیمانی', phone: '09000000017' },
  { id: 18, name: 'مسعود نادری', phone: '09000000018' },
  { id: 19, name: 'امین فلاحی', phone: '09000000019' },
  { id: 20, name: 'یوسف محمودی', phone: '09000000020' },
  { id: 21, name: 'مصطفی نوروزی', phone: '09000000021' },
  { id: 22, name: 'اسماعیل کریمی', phone: '09000000022' },
  { id: 23, name: 'اکبر ابراهیمی', phone: '09000000023' },
  { id: 24, name: 'داوود شمس', phone: '09000000024' },
  { id: 25, name: 'محمود صالحی', phone: '09000000025' },
  { id: 26, name: 'پرویز کاظمی', phone: '09000000026' },
  { id: 27, name: 'آرش محمدی', phone: '09000000027' },
  { id: 28, name: 'بابک احمدی', phone: '09000000028' },
  { id: 29, name: 'شهرام رضوانی', phone: '09000000029' },
  { id: 30, name: 'مجتبی حاتمی', phone: '09000000030' },
  { id: 31, name: 'علیرضا یوسفی', phone: '09000000031' },
  { id: 32, name: 'حبیب‌الله محمدی', phone: '09000000032' },
  { id: 33, name: 'مهدی رفیعی', phone: '09000000033' },
  { id: 34, name: 'حمیدرضا کمالی', phone: '09000000034' },
  { id: 35, name: 'سیدجواد حسینی', phone: '09000000035' },
  { id: 36, name: 'رضا نیک‌نام', phone: '09000000036' },
  { id: 37, name: 'علی‌اکبر باقری', phone: '09000000037' },
  { id: 38, name: 'مرتضی شاکری', phone: '09000000038' },
  { id: 39, name: 'حسن امیری', phone: '09000000039' },
  { id: 40, name: 'محمدرضا کاظمی', phone: '09000000040' },
  { id: 41, name: 'جلال احمدی', phone: '09000000041' },
  { id: 42, name: 'بهنام رجبی', phone: '09000000042' },
  { id: 43, name: 'سعید اسدی', phone: '09000000043' },
  { id: 44, name: 'حسین اکبری', phone: '09000000044' },
  { id: 45, name: 'علی‌اصغر رضایی', phone: '09000000045' },
  { id: 46, name: 'فرامرز عبادی', phone: '09000000046' },
  { id: 47, name: 'امیرحسین صالحی', phone: '09000000047' },
  { id: 48, name: 'محمود جعفری', phone: '09000000048' },
  { id: 49, name: 'محسن حیدری', phone: '09000000049' },
  { id: 50, name: 'سجاد مرادی', phone: '09000000050' },
];
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
        {customers.map((customer) => (
          <tr className='hover:bg-slate-50 transition-colors duration-150' key={customer.id}>
            <td className='px-4 py-4 text-sm text-right'>{customer.name}</td>
            <td className='px-4 py-4 text-sm text-right' dir='ltr'>
              {customer.phone}
            </td>
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
        ))}
      </tbody>
    </table>
  );
}

export default CustomerTable;
