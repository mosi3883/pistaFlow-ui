import { LuSearch } from 'react-icons/lu';

function CustomerSearch() {
  return (
    <form className='px-6 py-4'>
      <div className='relative'>
        <LuSearch className='top-1/2 right-3 absolute text-muted -translate-y-1/2' size={18} />
        <input
          type='text'
          className='block px-9 py-2 border border-slate-200 focus-visible:border-primary rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-100 w-full transition-colors delay-150'
          placeholder='جستجو نام مشتری'
        />
      </div>
    </form>
  );
}

export default CustomerSearch;
