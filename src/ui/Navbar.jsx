import { LuUsers, LuLayoutDashboard, LuBox, LuPackage, LuWallet, LuChartNoAxesCombined } from 'react-icons/lu';
import { NavLink } from 'react-router';
function Navbar() {
  return (
    <nav className='text-white'>
      <ul className='flex flex-col gap-1'>
        <li>
          <NavLink
            to='/'
            className='flex items-center gap-3 hover:bg-slate-700 px-3 py-2 rounded-lg h-11 text-slate-300 hover:text-white text-sm transition-colors duration-150'
          >
            <LuLayoutDashboard size={20} />
            <span>داشبورد</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/customers'
            className='flex items-center gap-3 hover:bg-slate-700 px-3 py-2 rounded-lg h-11 text-slate-300 hover:text-white text-sm transition-colors duration-150'
          >
            <LuUsers size={20} />
            <span>مشتریان</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/deliveries'
            className='flex items-center gap-3 hover:bg-slate-700 px-3 py-2 rounded-lg h-11 text-slate-300 hover:text-white text-sm transition-colors duration-150'
          >
            <LuPackage size={20} />
            <span>ورودی های پسته</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/accounting'
            className='flex items-center gap-3 hover:bg-slate-700 px-3 py-2 rounded-lg h-11 text-slate-300 hover:text-white text-sm transition-colors duration-150'
          >
            <LuWallet size={20} />
            <span>حسابداری</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/reports'
            className='flex items-center gap-3 hover:bg-slate-700 px-3 py-2 rounded-lg h-11 text-slate-300 hover:text-white text-sm transition-colors duration-150'
          >
            <LuChartNoAxesCombined size={20} />
            <span>گزارش‌ها</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
