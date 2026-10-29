import { Link } from 'react-router';

function Header() {
  return (
    <header className='flex justify-between items-center col-start-2 col-end-3 bg-white px-6 py-2 border-slate-200 border-b'>
      <h1 className='font-semibold text-sm'>داشبورد</h1>
      <Link
        to='/deliveries/new'
        className='flex justify-center items-center bg-primary hover:bg-blue-700 px-4 rounded-lg h-10 text-white transition-colors duration-150'
      >
        + ثبت ورودی جدید
      </Link>
    </header>
  );
}

export default Header;
