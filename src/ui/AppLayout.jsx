import { NavLink, Outlet } from 'react-router';
import Header from './Header';
import Navbar from './Navbar';
import { LuSettings } from 'react-icons/lu';
function AppLayout() {
  return (
    <div className='grid grid-cols-[240px_1fr] grid-rows-[64px_1fr] max-h-screen font-vazir'>
      <Header />
      <aside className='flex flex-col col-start-1 col-end-2 row-span-2 row-start-1 bg-sidebar p-4 min-h-screen'>
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
        <div className='mt-auto'>
          <NavLink
            to='/settings'
            className={({ isActive }) =>
              `flex h-11 items-center gap-3 px-3  rounded-lg text-sm transition-colors duration-150 ${
                isActive ? 'active' : 'hover:bg-slate-700  text-slate-300 hover:text-white'
              }`
            }
          >
            <LuSettings size={20} />
            <span>تنظیمات</span>
          </NavLink>
        </div>
      </aside>
      <main className='col-start-2 col-end-3 row-start-2 row-end-3 p-6 overflow-auto'>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
