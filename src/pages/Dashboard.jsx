import { LuPackageCheck, LuWeight, LuUsers } from 'react-icons/lu';
function Dashboard() {
  return (
    <>
      <div className='mb-6'>
        <h1 className='font-semibold text-heading text-2xl'>نمای کلی</h1>
        <p className='mt-2 text-muted text-sm'>خلاصه وضعیت و فعالیت‌های کارخانه</p>
      </div>
      <div className='gap-4 grid grid-cols-3'>
        <div className='flex items-start gap-4 bg-white p-6 border border-slate-200 rounded-xl'>
          <div className='bg-blue-50 p-3 rounded-lg text-blue-600'>
            <LuPackageCheck size={24} />
          </div>

          <div>
            <p className='text-muted text-base'>دریافتی‌های امروز</p>
            <p className='mt-2 font-bold text-heading text-2xl'>۲۴ محموله</p>
            <p className='mt-2 text-muted text-xs'>تعداد محموله‌های ثبت‌شده</p>
          </div>
        </div>

        <div className='flex items-start gap-4 bg-white p-6 border border-slate-200 rounded-xl'>
          <div className='bg-emerald-50 p-3 rounded-lg text-emerald-600'>
            <LuWeight size={24} />
          </div>

          <div>
            <p className='text-muted text-base'>وزن خالص امروز</p>
            <p className='mt-2 font-bold text-heading text-2xl'>۱۲٬۴۵۰ کیلوگرم</p>
            <p className='mt-2 text-muted text-xs'>مجموع وزن خالص دریافتی‌ها</p>
          </div>
        </div>

        <div className='flex items-start gap-4 bg-white p-6 border border-slate-200 rounded-xl'>
          <div className='bg-violet-50 p-3 rounded-lg text-violet-600'>
            <LuUsers size={24} />
          </div>

          <div>
            <p className='text-muted text-base'>تعداد مشتریان</p>
            <p className='mt-2 font-bold text-heading text-2xl'>۱۸۶ نفر</p>
            <p className='mt-2 text-muted text-xs'>مشتریان ثبت‌شده در سیستم</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
