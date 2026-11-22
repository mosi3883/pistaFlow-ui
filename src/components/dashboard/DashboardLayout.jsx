import { LuAward, LuChartLine, LuPackageCheck, LuUsers, LuWeight } from 'react-icons/lu';
import DashboardDeliveryChart from './DashboardDeliveryChart';

function DashboardLayout() {
  return (
    <>
      {/* INFO BOXES */}
      <div className='gap-4 grid grid-cols-3'>
        <div className='flex items-start gap-4 bg-white p-6 border border-border rounded-xl'>
          <div className='bg-blue-50 p-3 rounded-lg text-blue-600'>
            <LuPackageCheck size={24} />
          </div>

          <div>
            <p className='text-muted text-base'>وزن خالص ورودی امروز</p>
            <p className='mt-2 font-bold text-heading text-2xl'>۲۴,۵۰۰ کیلوگرم</p>
            <p className='mt-2 text-muted text-xs'>در تاریخ 12 آبان ۱۴۰۵ </p>
          </div>
        </div>

        <div className='flex items-start gap-4 bg-white p-6 border border-border rounded-xl'>
          <div className='bg-emerald-50 p-3 rounded-lg text-emerald-600'>
            <LuWeight size={24} />
          </div>

          <div>
            <p className='text-muted text-base'>وزن خالص ورودی دیروز</p>
            <p className='mt-2 font-bold text-heading text-2xl'>۱۹٬۸۰۰ کیلوگرم</p>
            <p className='mt-2 text-muted text-xs'>در تاریخ ۱۱ آبان ۱۴۰۵ </p>
          </div>
        </div>

        <div className='flex items-start gap-4 bg-white p-6 border border-border rounded-xl'>
          <div className='bg-violet-50 p-3 rounded-lg text-violet-600'>
            <LuUsers size={24} />
          </div>

          <div>
            <p className='text-muted text-base'>مجموع ورودی فصل</p>
            <p className='mt-2 font-bold text-heading text-2xl'>۲۵۴,۹۸۰ کیلوگرم</p>
            <p className='mt-2 text-muted text-xs'>از ابتدای فصل تا امروز</p>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-[2fr_1fr] mt-6 gap-8'>
        {/* Chart */}
        <div className=' bg-white p-6 border border-border rounded-xl '>
          <div className='flex items-center gap-2 mb-2'>
            <LuChartLine size={32} className='text-blue-500' />
            <div>
              <h2 className='text-xl text-heading font-bold'>روند ورودی روزانه</h2>
              <p className='text-sm text-muted'>وزن خالص ورودی به تفکیک روز</p>
            </div>
          </div>
          <div className='flex items-center justify-center'>
            <DashboardDeliveryChart />
          </div>
        </div>
        {/* Most Income */}
        <div className=' bg-white p-6 border border-border rounded-xl '>
          <div className='flex items-center gap-2 mb-6'>
            <LuAward size={32} className='text-primary' />
            <div>
              <h2 className='text-xl text-heading font-bold'>مشتریان با بیشترین ورودی</h2>
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <div className='bg-gray-50 rounded-md overflow-hidden px-2 py-1 text-black flex w-full gap-2'>
              <div className='flex justify-center items-center bg-primary text-white w-8 rounded-lg'>
                {new Intl.NumberFormat('fa-IR').format(1)}
              </div>
              <div className='p-1'>علی رضایی</div>
              <div className='p-1 mr-auto flex gap-1.5'>
                <span className='text-lg'>{new Intl.NumberFormat('fa-IR').format(98000)}</span>
                <span>کیلوگرم</span>
              </div>
            </div>
            <div className='bg-gray-50 rounded-md overflow-hidden px-2 py-1 text-black flex w-full gap-2'>
              <div className='flex justify-center items-center bg-primary text-white w-8 rounded-lg'>
                {new Intl.NumberFormat('fa-IR').format(2)}
              </div>
              <div className='p-1'>محمد احمدی</div>
              <div className='p-1 mr-auto flex gap-1.5'>
                <span className='text-lg'>{new Intl.NumberFormat('fa-IR').format(84500)}</span>
                <span>کیلوگرم</span>
              </div>
            </div>
            <div className='bg-gray-50 rounded-md overflow-hidden px-2 py-1 text-black flex w-full gap-2'>
              <div className='flex justify-center items-center bg-primary text-white w-8 rounded-lg'>
                {new Intl.NumberFormat('fa-IR').format(3)}
              </div>
              <div className='p-1'>حسین کریمی</div>
              <div className='p-1 mr-auto flex gap-1.5'>
                <span className='text-lg'>{new Intl.NumberFormat('fa-IR').format(79300)}</span>
                <span>کیلوگرم</span>
              </div>
            </div>
            <div className='bg-gray-50 rounded-md overflow-hidden px-2 py-1 text-black flex w-full gap-2'>
              <div className='flex justify-center items-center bg-primary text-white w-8 rounded-lg'>
                {new Intl.NumberFormat('fa-IR').format(4)}
              </div>
              <div className='p-1'>رضا مرادی</div>
              <div className='p-1 mr-auto flex gap-1.5'>
                <span className='text-lg'>{new Intl.NumberFormat('fa-IR').format(73800)}</span>
                <span>کیلوگرم</span>
              </div>
            </div>
            <div className='bg-gray-50 rounded-md overflow-hidden px-2 py-1 text-black flex w-full gap-2'>
              <div className='flex justify-center items-center bg-primary text-white w-8 rounded-lg'>
                {new Intl.NumberFormat('fa-IR').format(5)}
              </div>
              <div className='p-1'>مهدی حسینی</div>
              <div className='p-1 mr-auto flex gap-1.5'>
                <span className='text-lg'>{new Intl.NumberFormat('fa-IR').format(69400)}</span>
                <span>کیلوگرم</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardLayout;
