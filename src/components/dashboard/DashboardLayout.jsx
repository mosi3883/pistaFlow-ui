import { LuPackageCheck, LuUsers, LuWeight } from 'react-icons/lu';
import DashboardDeliveryChart from './DashboardDeliveryChart';

function DashboardLayout() {
  return (
    <>
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
      <div className='grid grid-cols-[2fr_1fr] mt-6'>
        <div className=' bg-white p-6 border border-border rounded-xl flex items-center justify-center'>
          <DashboardDeliveryChart />
        </div>
        <div>table</div>
      </div>
    </>
  );
}

export default DashboardLayout;
