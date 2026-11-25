import {
  LuAnvil,
  // LuArrowDown,
  LuArrowUp,
  LuAward,
  LuCalendarDays,
  LuChartLine,
  LuPackageCheck,
  LuWeight,
} from 'react-icons/lu';
import DashboardDeliveryChart from './DashboardDeliveryChart';
import DeliveryTable from '../deliveries/DeliveryTable';

import {
  customerWeights,
  getEntriesByDate,
  sumTotalEntriesWeight,
  today,
  todayString,
  yesterdayString,
} from '../../utils/utilities';
function DashboardLayout() {
  const todayWeight = getEntriesByDate(todayString).reduce((total, entry) => total + (entry.netWeight ?? 0), 0);
  const yesterdayWeight = getEntriesByDate(yesterdayString).reduce((total, entry) => total + (entry.netWeight ?? 0), 0);
  const topFiveCustomers = customerWeights
    .slice()
    .sort((a, b) => b.totalWeight - a.totalWeight)
    .slice(0, 5);

  return (
    <>
      {/* INFO BOXES */}
      <div className='gap-4 grid grid-cols-3 mb-6'>
        <div className='grid grid-cols-[auto_1fr] items-start gap-4 bg-white p-6 border border-border rounded-xl'>
          <div className='bg-blue-50 p-3 rounded-lg text-blue-600'>
            <LuWeight size={24} />
          </div>

          <div>
            <p className='text-muted text-base'>وزن خالص ورودی امروز</p>
            <div className='mt-2  flex items-center justify-between'>
              <div className='font-bold text-heading text-2xl'>
                {Intl.NumberFormat('fa-IR').format(todayWeight)} کیلوگرم
              </div>
              <div className=' flex flex-col justify-center items-center text-xs'>
                <div className='text-green-700 flex items-center'>
                  ۲۳.۷% <LuArrowUp />
                  {/* <LuArrowDown /> */}
                </div>
                <div>نسبت به دیروز</div>
              </div>
            </div>
            <p className='mt-2 text-muted text-xs'>
              در تاریخ {new Intl.DateTimeFormat('fa-IR', { dateStyle: 'medium' }).format(today)}
            </p>
          </div>
        </div>

        <div className='grid grid-cols-[auto_1fr] items-start gap-4 bg-white p-6 border border-border rounded-xl'>
          <div className='bg-emerald-50 p-3 rounded-lg text-emerald-600'>
            <LuCalendarDays size={24} />
          </div>

          <div>
            <p className='text-muted text-base'>وزن خالص ورودی دیروز</p>
            <div className='font-bold text-heading text-2xl'>
              {Intl.NumberFormat('fa-IR').format(yesterdayWeight)} کیلوگرم
            </div>
            <p className='mt-2 text-muted text-xs'>
              در تاریخ {new Intl.DateTimeFormat('fa-IR', { dateStyle: 'medium' }).format(today) /* ! NEED FIX */}
            </p>
          </div>
        </div>

        <div className='grid grid-cols-[auto_1fr] items-start gap-4 bg-white p-6 border border-border rounded-xl'>
          <div className='bg-violet-50 p-3 rounded-lg text-violet-600'>
            <LuPackageCheck size={24} />
          </div>

          <div>
            <p className='text-muted text-base'>مجموع ورودی فصل</p>
            <p className='mt-2 font-bold text-heading text-2xl'>
              {Intl.NumberFormat('fa-IR').format(sumTotalEntriesWeight)} کیلوگرم
            </p>
            <p className='mt-2 text-muted text-xs'>از ابتدای فصل تا امروز</p>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-[2fr_1fr] gap-8 mb-6'>
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
        <div className='bg-white p-6 border border-border rounded-xl'>
          <div className='flex items-center gap-2 mb-6'>
            <LuAward size={32} className='text-primary' />
            <div>
              <h2 className='text-xl text-heading font-bold'>مشتریان با بیشترین ورودی</h2>
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            {topFiveCustomers.map((customer, index) => (
              <div
                className='bg-gray-50 rounded-md overflow-hidden px-2 py-1 text-black flex w-full gap-2'
                key={customer.userId}
              >
                <div className='flex justify-center items-center bg-primary text-white w-8 rounded-lg'>
                  {new Intl.NumberFormat('fa-IR').format(index + 1)}
                </div>
                <div className='p-1'>{customer.customerName}</div>
                <div className='p-1 mr-auto flex gap-1.5'>
                  <span className='text-lg'>{new Intl.NumberFormat('fa-IR').format(customer.totalWeight)}</span>
                  <span>کیلوگرم</span>
                </div>
              </div>
            ))}
            {/* <div className='bg-gray-50 rounded-md overflow-hidden px-2 py-1 text-black flex w-full gap-2'>
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
            </div> */}
          </div>
        </div>
      </div>
      <div className='bg-white p-6 border border-border rounded-xl'>
        <div className='flex items-center gap-2 mb-6'>
          <LuAnvil size={32} className='text-primary' />
          <div>
            <h2 className='text-xl text-heading font-bold'>آخرین ورودی‌های ثبت شده</h2>
          </div>
        </div>
        <div>
          <DeliveryTable latest />
        </div>
      </div>
    </>
  );
}

export default DashboardLayout;
