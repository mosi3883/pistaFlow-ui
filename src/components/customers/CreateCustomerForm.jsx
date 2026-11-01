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
          className='block px-3 py-3 border border-slate-200 rounded-lg w-full text-sm'
          placeholder='نام مشتری را وارد کنید'
        />
      </div>
      <div className='flex flex-col gap-2 mb-6'>
        <label htmlFor='phone' className='text-sm'>
          شماره تلفن
        </label>
        <input
          id='phone'
          type='text'
          className='block px-3 py-3 border border-slate-200 rounded-lg w-full text-sm'
          placeholder='شماره تلفن مشتری را وارد کنید'
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
