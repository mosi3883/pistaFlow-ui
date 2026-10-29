import { LuUsers, LuLayoutDashboard, LuBox } from 'react-icons/lu';
import { NavLink } from 'react-router';
function Navbar() {
  return (
    <nav className='text-white'>
      <ul className='flex flex-col gap-1'>
        <li>
          <NavLink
            href='#'
            className='flex items-center gap-3 bg-primary px-3 py-2 rounded-lg h-11 text-white text-sm transition-colors duration-150'
          >
            <LuLayoutDashboard size={20} />
            <span>داشبورد</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            href='#'
            className='flex items-center gap-3 hover:bg-slate-700 px-3 py-2 rounded-lg h-11 text-slate-300 hover:text-white text-sm transition-colors duration-150'
          >
            <LuUsers size={20} />
            <span>مشتریان</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            href='#'
            className='flex items-center gap-3 hover:bg-slate-700 px-3 py-2 rounded-lg h-11 text-slate-300 hover:text-white text-sm transition-colors duration-150'
          >
            <LuBox size={20} />
            <span>ورودی های پسته</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
