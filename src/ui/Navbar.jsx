import { LuUsers, LuLayoutDashboard, LuBox, LuPackage, LuWallet, LuChartNoAxesCombined } from 'react-icons/lu';
import { NavLink } from 'react-router';
function Navbar() {
  return (
    <nav className='text-white'>
      <ul className='flex flex-col gap-1'>
        <li>
          <NavLink
            to='/'
            end
            className={({ isActive }) =>
              `flex h-11 items-center gap-3 px-3  rounded-lg text-sm transition-colors duration-150 ${
                isActive ? 'active' : 'hover:bg-slate-700  text-slate-300 hover:text-white'
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
                isActive ? 'active' : 'hover:bg-slate-700  text-slate-300 hover:text-white'
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
            className={({ isActive }) =>
              `flex h-11 items-center gap-3 px-3  rounded-lg text-sm transition-colors duration-150 ${
                isActive ? 'active' : 'hover:bg-slate-700  text-slate-300 hover:text-white'
              }`
            }
          >
            <LuPackage size={20} />
            <span>ورودی های پسته</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/accounting'
            className={({ isActive }) =>
              `flex h-11 items-center gap-3 px-3  rounded-lg text-sm transition-colors duration-150 ${
                isActive ? 'active' : 'hover:bg-slate-700  text-slate-300 hover:text-white'
              }`
            }
          >
            <LuWallet size={20} />
            <span>حسابداری</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/reports'
            className={({ isActive }) =>
              `flex h-11 items-center gap-3 px-3  rounded-lg text-sm transition-colors duration-150 ${
                isActive ? 'active' : 'hover:bg-slate-700  text-slate-300 hover:text-white'
              }`
            }
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
