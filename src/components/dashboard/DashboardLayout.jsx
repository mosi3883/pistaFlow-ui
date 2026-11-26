import {
  LuAnvil,
  LuArrowDown,
  LuArrowUp,
  LuAward,
  LuCalendarDays,
  LuChartLine,
  LuPackageCheck,
  LuWeight,
} from 'react-icons/lu';
import DailyDeliveryWeightChart from './DailyDeliveryWeightChart';
import DeliveryTable from '../deliveries/DeliveryTable';

import {
  customerNetWeightTotals,
  getTodayWeightChangePercent,
  totalNetWeight,
  todayDate,
  todayDateString,
  getTotalNetWeightByDate,
  yesterdayDateString,
  yesterdayDate,
} from '../../utils/utilities';
function DashboardLayout() {
  const todayNetWeight = getTotalNetWeightByDate(todayDateString);
  const yesterdayNetWeight = getTotalNetWeightByDate(yesterdayDateString);
  const topFiveCustomersByNetWeight = customerNetWeightTotals
    .slice()
    .sort((a, b) => b.totalNetWeight - a.totalNetWeight)
    .slice(0, 5);
  const todayWeightChangePercent = getTodayWeightChangePercent();
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
                {Intl.NumberFormat('fa-IR').format(todayNetWeight)} کیلوگرم
              </div>
              {todayWeightChangePercent !== null && (
                <div className=' flex flex-col justify-center items-center text-xs'>
                  <div
                    className={
                      todayWeightChangePercent > 0
                        ? 'text-green-700 flex items-center'
                        : 'text-red-700 flex items-center gap-1'
                    }
                  >
                    {todayWeightChangePercent > 0 ? <LuArrowUp /> : <LuArrowDown />}{' '}
                    {Intl.NumberFormat('fa-IR').format(todayWeightChangePercent)}%
                  </div>
                  <div>نسبت به دیروز</div>
                </div>
              )}
            </div>
            <p className='mt-2 text-muted text-xs'>
              در تاریخ {new Intl.DateTimeFormat('fa-IR', { dateStyle: 'medium' }).format(todayDate)}
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
              {Intl.NumberFormat('fa-IR').format(yesterdayNetWeight)} کیلوگرم
            </div>
            <p className='mt-2 text-muted text-xs'>
              در تاریخ {new Intl.DateTimeFormat('fa-IR', { dateStyle: 'medium' }).format(yesterdayDate)}
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
              {Intl.NumberFormat('fa-IR').format(totalNetWeight)} کیلوگرم
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
            <DailyDeliveryWeightChart />
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
            {topFiveCustomersByNetWeight.map((customer, index) => (
              <div
                className='bg-gray-50 rounded-md overflow-hidden px-2 py-1 text-black flex w-full gap-2'
                key={customer.userId}
              >
                <div className='flex justify-center items-center bg-primary text-white w-8 rounded-lg'>
                  {new Intl.NumberFormat('fa-IR').format(index + 1)}
                </div>
                <div className='p-1'>{customer.customerName}</div>
                <div className='p-1 mr-auto flex gap-1.5'>
                  <span className='text-lg'>{new Intl.NumberFormat('fa-IR').format(customer.totalNetWeight)}</span>
                  <span>کیلوگرم</span>
                </div>
              </div>
            ))}
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
          <DeliveryTable showLatest />
        </div>
      </div>
    </>
  );
}

export default DashboardLayout;
