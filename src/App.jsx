import { LuPackageCheck, LuWeight, LuUsers } from 'react-icons/lu';
function App() {
  return (
    <div className='grid grid-cols-[240px_1fr] grid-rows-[64px_1fr] h-screen font-vazir'>
      <header className='flex items-center col-start-2 col-end-3 bg-white px-6 py-2 border-slate-200 border-b'>
        سربرگ
      </header>
      <aside className='col-start-1 col-end-2 row-span-2 row-start-1 bg-sidebar'>
        <nav></nav>
      </aside>
      <main className='col-start-2 col-end-3 row-start-2 row-end-3 p-6'>
        <div className='mb-6'>
          <h1 className='font-semibold text-text1 text-2xl'>نمای کلی</h1>
          <p className='mt-2 text-secondary text-sm'>خلاصه وضعیت و فعالیت‌های کارخانه</p>
        </div>
        <div className='gap-4 grid grid-cols-3'>
          <div className='flex items-start gap-4 bg-white p-6 border border-slate-200 rounded-xl'>
            <div className='bg-blue-50 p-3 rounded-lg text-blue-600'>
              <LuPackageCheck size={24} />
            </div>

            <div>
              <p className='text-secondary text-base'>دریافتی‌های امروز</p>
              <p className='mt-2 font-bold text-text1 text-2xl'>۲۴ محموله</p>
              <p className='mt-2 text-secondary text-xs'>تعداد محموله‌های ثبت‌شده</p>
            </div>
          </div>

          <div className='flex items-start gap-4 bg-white p-6 border border-slate-200 rounded-xl'>
            <div className='bg-emerald-50 p-3 rounded-lg text-emerald-600'>
              <LuWeight size={24} />
            </div>

            <div>
              <p className='text-secondary text-base'>وزن خالص امروز</p>
              <p className='mt-2 font-bold text-text1 text-2xl'>۱۲٬۴۵۰ کیلوگرم</p>
              <p className='mt-2 text-secondary text-xs'>مجموع وزن خالص دریافتی‌ها</p>
            </div>
          </div>

          <div className='flex items-start gap-4 bg-white p-6 border border-slate-200 rounded-xl'>
            <div className='bg-violet-50 p-3 rounded-lg text-violet-600'>
              <LuUsers size={24} />
            </div>

            <div>
              <p className='text-secondary text-base'>تعداد مشتریان</p>
              <p className='mt-2 font-bold text-text1 text-2xl'>۱۸۶ نفر</p>
              <p className='mt-2 text-secondary text-xs'>مشتریان ثبت‌شده در سیستم</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
