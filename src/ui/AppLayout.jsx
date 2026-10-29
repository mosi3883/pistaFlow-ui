import { Outlet } from 'react-router';
import Header from './Header';
import Navbar from './Navbar';
function AppLayout() {
  return (
    <div className='grid grid-cols-[240px_1fr] grid-rows-[64px_1fr] h-screen font-vazir'>
      <Header />
      <aside className='col-start-1 col-end-2 row-span-2 row-start-1 bg-sidebar p-4'>
        <div className='flex items-center gap-3 mb-8'>
          <div className='flex justify-center items-center bg-white rounded-lg size-12'>
            <img src='/logo.png' />
          </div>

          <div>
            <h2 className='font-semibold text-white text-base'>پسته یار</h2>
            <p className='mt-1 text-slate-400 text-xs'>سامانه مدیریت کارخانه یزدی</p>
          </div>
        </div>
        <Navbar />
      </aside>
      <main className='col-start-2 col-end-3 row-start-2 row-end-3 p-6'>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
