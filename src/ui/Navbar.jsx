import {
  LuUsers,
  LuLayoutDashboard,
  LuPackage,
  LuChartNoAxesCombined,
  LuSettings,
  LuHandCoins,
  LuReceipt,
  LuFileText,
  LuFileCheck,
} from 'react-icons/lu';
import { NavLink } from 'react-router';
function Navbar() {
  return (
    <nav className='text-white'>
      <div className='border-b border-gray-500 py-4'>
        <ul className='flex flex-col gap-1'>
          <li>
            <NavLink
              to='/'
              end
              className={({ isActive }) =>
                `flex h-11 items-center gap-3 px-3  rounded-lg text-sm transition-colors duration-150 ${
                  isActive ? 'active' : 'hover:bg-slate-700 text-slate-300 hover:text-white'
                }`
              }
            >
              <LuLayoutDashboard size={20} />
              <span>داشبورد</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/customers'
              className={({ isActive }) =>
                `flex h-11 items-center gap-3 px-3  rounded-lg text-sm transition-colors duration-150 ${
                  isActive ? 'active' : 'hover:bg-slate-700 text-slate-300 hover:text-white'
                }`
              }
            >
              <LuUsers size={20} />
              <span>مشتریان</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/deliveries'
              end
              className={({ isActive }) =>
                `flex h-11 items-center gap-3 px-3  rounded-lg text-sm transition-colors duration-150 ${
                  isActive ? 'active' : 'hover:bg-slate-700 text-slate-300 hover:text-white'
                }`
              }
            >
              <LuPackage size={20} />
              <span>ورودی های پسته</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className='border-b border-gray-500 py-4'>
        <h3 className='text-gray-400 mb-2 text-sm'>امور مالی</h3>
        <ul className='flex flex-col gap-1'>
          <li>
            <NavLink
              to='/receipts'
              className={({ isActive }) =>
                `flex h-11 items-center gap-3 px-3  rounded-lg text-sm transition-colors duration-150 ${
                  isActive ? 'active' : 'hover:bg-slate-700 text-slate-300 hover:text-white'
                }`
              }
            >
              <LuHandCoins size={20} />
              <span>دریافتی ها</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/expenses'
              className={({ isActive }) =>
                `flex h-11 items-center gap-3 px-3  rounded-lg text-sm transition-colors duration-150 ${
                  isActive ? 'active' : 'hover:bg-slate-700 text-slate-300 hover:text-white'
                }`
              }
            >
              <LuReceipt size={20} />
              <span>هزینه‌های جانبی</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/customer-invoices'
              className={({ isActive }) =>
                `flex h-11 items-center gap-3 px-3  rounded-lg text-sm transition-colors duration-150 ${
                  isActive ? 'active' : 'hover:bg-slate-700 text-slate-300 hover:text-white'
                }`
              }
            >
              <LuFileText size={20} />
              <span>صورتحساب مشتریان</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/checks'
              className={({ isActive }) =>
                `flex h-11 items-center gap-3 px-3  rounded-lg text-sm transition-colors duration-150 ${
                  isActive ? 'active' : 'hover:bg-slate-700 text-slate-300 hover:text-white'
                }`
              }
            >
              <LuFileCheck size={20} />
              <span>مدیریت چک‌ها</span>
            </NavLink>
          </li>
        </ul>
      </div>

      <div className='border-b border-gray-500 py-4'>
        <ul className='flex flex-col gap-1'>
          <li>
            <NavLink
              to='/reports'
              className={({ isActive }) =>
                `flex h-11 items-center gap-3 px-3  rounded-lg text-sm transition-colors duration-150 ${
                  isActive ? 'active' : 'hover:bg-slate-700 text-slate-300 hover:text-white'
                }`
              }
            >
              <LuChartNoAxesCombined size={20} />
              <span>گزارش‌ها</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/settings'
              className={({ isActive }) =>
                `flex h-11 items-center gap-3 px-3  rounded-lg text-sm transition-colors duration-150 ${
                  isActive ? 'active' : 'hover:bg-slate-700 text-slate-300 hover:text-white'
                }`
              }
            >
              <LuSettings size={20} />
              <span>تنظیمات</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
