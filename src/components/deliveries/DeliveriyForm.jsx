import { useForm, useWatch } from 'react-hook-form';
import { LuCalculator, LuCalendarDays, LuHash, LuLeaf, LuScale, LuUserRound } from 'react-icons/lu';
import Button from '../../ui/Button';

function DeliveriyForm({ editMode = false }) {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm();

  const gross = useWatch({ control, name: 'grossWeight' });
  const tare = useWatch({ control, name: 'tareWeight' });
  const hasBothWeights = gross !== undefined && gross !== '' && tare !== undefined && tare !== '';
  const netWeight = hasBothWeights ? Number(gross) - Number(tare) : null;
  function onSubmit(data) {
    const newDelivery = { ...data, netWeight };
    console.log(newDelivery);
  }

  function handleReset() {
    reset();
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col gap-2 mb-4'>
          <label htmlFor='customer' className='flex items-center gap-0.5 font-semibold text-base'>
            <LuUserRound size={18} />
            <span>انتخاب مشتری</span>
            {errors.userId ? <span className='text-red-600 text-xs'>({errors.userId?.message})</span> : ''}
          </label>

          <select
            id='customer'
            className='block px-3 py-2 border border-border focus:border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100 w-full text-sm transition-colors'
            {...register('userId', { required: 'مشتری رو انتخاب کنید' })}
          >
            <option value='' selected>
              مشتری رو انتخاب کنید
            </option>
            <option value='1'>علی</option>
            <option value='2'>محمد</option>
          </select>
        </div>
        <div className='flex flex-col gap-2 mb-4'>
          <label htmlFor='code' className='flex items-center gap-0.5 font-semibold text-base'>
            <LuHash size={18} />
            <span>کد(شماره محموله)</span>
            {errors.code ? <span className='text-red-600 text-xs'>({errors.code?.message})</span> : ''}
          </label>

          <input
            id='code'
            type='number'
            min='100'
            className='block px-3 py-3 border border-border focus:border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100 w-full text-sm transition-colors'
            {...register('code')}
          />
        </div>
        <div className='flex flex-col gap-2 mb-4'>
          <label htmlFor='pistaType' className='flex items-center gap-0.5 font-semibold text-base'>
            <LuLeaf size={18} />
            <span>نوع پسته</span>
            {errors.pistaType ? <span className='text-red-600 text-xs'>({errors.pistaType?.message})</span> : ''}
          </label>

          <input
            id='pistaType'
            type='text'
            className='block px-3 py-3 border border-border focus:border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100 w-full text-sm transition-colors'
            {...register('pistaType')}
          />
        </div>
        <div className='flex flex-col gap-2 mb-4'>
          <label htmlFor='date' className='flex items-center gap-0.5 font-semibold text-base'>
            <LuCalendarDays size={18} />
            <span>تاریخ</span>
            {errors.date ? <span className='text-red-600 text-xs'>({errors.date?.message})</span> : ''}
          </label>

          <input
            id='date'
            type='date'
            className='block px-3 py-3 border border-border focus:border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100 w-full text-sm transition-colors'
            {...register('date', {
              required: 'تاریخ را وارد کنید!',
            })}
          />
        </div>

        <div className='flex flex-col gap-2 mb-4'>
          <label htmlFor='gross' className='flex items-center gap-0.5 font-semibold text-base'>
            <LuScale size={18} />
            <span>وزن پر(kg)</span>
            {errors.grossWeight ? <span className='text-red-600 text-xs'>({errors.grossWeight?.message})</span> : ''}
          </label>

          <input
            id='gross'
            type='number'
            className='block px-3 py-3 border border-border focus:border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100 w-full text-sm transition-colors'
            placeholder='وزن پر  را وارد کنید'
            autoComplete='off'
            {...register('grossWeight', {
              required: 'وزن پر را وارد کنید!',
            })}
          />
        </div>
        <div className='flex flex-col gap-2 mb-4'>
          <label htmlFor='tare' className='flex items-center gap-0.5 font-semibold text-base'>
            <LuScale size={18} />
            <span> وزن خالی(kg)</span>
            {errors.tareWeight ? <span className='text-red-600 text-xs'>({errors.tareWeight?.message})</span> : ''}
          </label>

          <input
            id='tare'
            type='number'
            className='block px-3 py-3 border border-border focus:border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100 w-full text-sm transition-colors'
            placeholder='وزن خالی را وارد کنید'
            autoComplete='off'
            {...register('tareWeight')}
          />
        </div>
        <div className='flex flex-row justify-between bg-net-weight mb-4 px-3 py-3'>
          <span className='flex items-center gap-0.5 font-semibold text-base'>
            <LuCalculator size={18} />
            <span> وزن خالص(kg)</span>
          </span>
          <span className=''>
            {netWeight === null ? 'وزن ها تکمیل نیست' : netWeight <= 0 ? 'ورودی وزن اشتباه' : `${netWeight}Kg`}
          </span>
        </div>
        <div className='flex gap-2 mt-6'>
          <Button type='button' variant='secondary' onClick={handleReset}>
            پاک کردن
          </Button>
          <Button type='submit' variant='primary'>
            {editMode ? 'ویرایش ورودی' : 'افزودن ورودی'}
          </Button>
        </div>
      </form>
    </>
  );
}

export default DeliveriyForm;
