import { useForm } from 'react-hook-form';
import Button from '../../ui/Button';
import toast from 'react-hot-toast';

function CreateCustomerForm({ handleClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  function onSubmit(data) {
    console.log(data);
    // onsuccess show 'کاربر با موفقیت اضافه شد'
    toast.success('کاربر با موفقیت اضافه شد');
    // on success close the modal
    handleClose();
    // on error show 'خطا در ساخت کاربر'
    //toast.error('خطا در ساخت کاربر');
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='flex flex-col gap-2 mb-4'>
        <label htmlFor='name' className='text-sm'>
          نام و نام خانوادگی
          {errors.name ? <span className='text-red-600 text-xs'>({errors.name?.message})</span> : ''}
        </label>

        <input
          id='name'
          type='text'
          className='block px-3 py-3 border border-slate-200 focus:border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100 w-full text-sm transition-colors'
          placeholder='نام مشتری را وارد کنید'
          autoComplete='off'
          {...register('name', {
            required: 'نام را وارد کنید!',
            type: String,
          })}
        />
      </div>
      <div className='flex flex-col gap-2 mb-6'>
        <label htmlFor='phone' className='text-sm'>
          شماره تلفن
          {errors.phone ? <span className='text-red-600 text-xs'>({errors.phone?.message})</span> : ''}
        </label>

        <input
          id='phone'
          type='tel'
          className='block px-3 py-3 border border-slate-200 focus:border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100 w-full text-sm transition-colors'
          placeholder='شماره تلفن مشتری را وارد کنید'
          autoComplete='off'
          {...register('phone', {
            required: 'تلفن را وارد کنید!',
            type: String,
            pattern: {
              value: /^0\d{10}$/,
              message: 'شماره تلفن باید 11 رقمی و با صفر شروع شود',
            },
          })}
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
