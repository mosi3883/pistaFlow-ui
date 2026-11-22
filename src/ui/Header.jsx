import { LuUser } from 'react-icons/lu';

function Header() {
  return (
    <header className='flex justify-between items-center col-start-2 col-end-3 bg-white px-6 py-2 border-slate-200 border-b'>
      <div className='flex items-center gap-2 mr-auto'>
        <span>مصطفی بداغ آبادی</span>
        <LuUser size={24} className='text-gray-500' />
      </div>
    </header>
  );
}

export default Header;
