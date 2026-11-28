import { LuSearch } from 'react-icons/lu';

function CustomerSearch({ onSearch }) {
  return (
    <form className='px-6 py-4'>
      <div className='relative'>
        <LuSearch className='top-1/2 right-3 absolute text-muted -translate-y-1/2' size={18} />
        <input
          type='text'
          onChange={(e) => onSearch(e.target.value)}
          className='block py-2 pr-10 pl-3 border border-border focus:border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100 w-full text-sm transition-colors delay-150'
          placeholder='جستجو نام مشتری'
        />
      </div>
    </form>
  );
}

export default CustomerSearch;
