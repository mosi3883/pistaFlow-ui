import Button from '../../ui/Button';

function CreateCustomerForm({ handleClose }) {
  return (
    <form>
      <div className='flex flex-col gap-2 mb-4'>
        <label htmlFor='name' className='text-sm'>
          نام و نام خانوادگی
        </label>
        <input
          id='name'
          type='text'
          className='block px-3 py-3 border border-slate-200 focus:border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100 w-full text-sm transition-colors'
          placeholder='نام مشتری را وارد کنید'
          autoComplete='off'
          required
        />
      </div>
      <div className='flex flex-col gap-2 mb-6'>
        <label htmlFor='phone' className='text-sm'>
          شماره تلفن
        </label>
        <input
          id='phone'
          type='text'
          className='block px-3 py-3 border border-slate-200 focus:border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100 w-full text-sm transition-colors'
          placeholder='شماره تلفن مشتری را وارد کنید'
          autoComplete='off'
          required
        />
      </div>
      <div className='flex gap-2'>
        <Button type='button' variant='secondary' onClick={handleClose}>
          انصراف
        </Button>
        <Button type='submit' variant='primary'>
          افزودن مشتری
        </Button>
      </div>
    </form>
  );
}

export default CreateCustomerForm;
