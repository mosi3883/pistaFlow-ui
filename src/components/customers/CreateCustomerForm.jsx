import Button from '../../ui/Button';

function CreateCustomerForm() {
  return (
    <form>
      <div className='mb-2'>
        <input
          type='text'
          className='block px-4 py-2 border border-slate-200 rounded-lg w-full text-xs'
          placeholder='نام مشتری'
        />
      </div>
      <div className='mb-8'>
        <input
          type='text'
          className='block px-4 py-2 border border-slate-200 rounded-lg w-full text-xs'
          placeholder='شماره تلفن'
        />
      </div>
      <div className='flex gap-2'>
        <Button type='submit' variant='primary' size='sm'>
          افزودن مشتری
        </Button>
        <Button type='reset' variant='secondary' size='sm'>
          پاک کردن
        </Button>
      </div>
    </form>
  );
}

export default CreateCustomerForm;
