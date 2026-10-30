import { LuSearch } from 'react-icons/lu';

function CustomerSearch() {
  return (
    <form className='my-4 px-6'>
      <div className='relative'>
        <LuSearch className='top-3 right-3 absolute' size={18} />
        <input
          type='text'
          className='block mb-4 px-10 py-2 border border-slate-200 focus-visible:border-slate-500 rounded-lg focus-visible:outline-none w-full transition-colors delay-150'
          placeholder='جستجو نام مشتری'
        />
      </div>
    </form>
  );
}

export default CustomerSearch;
