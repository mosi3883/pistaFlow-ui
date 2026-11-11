import { useForm, useWatch } from 'react-hook-form';
import { LuCalculator, LuCalendarDays, LuHash, LuLeaf, LuScale, LuUserRound } from 'react-icons/lu';
import Button from '../../ui/Button';
import DatePicker from 'react-multi-date-picker';
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';
import 'react-multi-date-picker/styles/colors/green.css';
//import 'react-multi-date-picker/styles/backgrounds/bg-dark.css';
function DeliveryForm({ editMode = false }) {
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
          <label htmlFor='date' className='flex items-center gap-0.5 font-semibold text-base'>
            <LuCalendarDays size={18} />
            <span>تاریخ</span>
            {errors.date ? <span className='text-red-600 text-xs'>({errors.date?.message})</span> : ''}
          </label>
          <DatePicker
            calendar={persian}
            locale={persian_fa}
            calendarPosition='bottom-right'
            className='green'
            inputClass='block px-3 py-3 border border-border focus:border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100 w-full h-10 text-sm transition-colors'
          />
        </div>

        <div className='flex justify-between gap-4 mb-4'>
          <div className='flex flex-col gap-2 w-1/4'>
            <label htmlFor='code' className='flex items-center gap-0.5 font-semibold text-base'>
              <LuHash size={18} />
              <span>کد(شماره محموله)</span>
              {errors.code ? <span className='text-red-600 text-xs'>({errors.code?.message})</span> : ''}
            </label>

            <input
              id='code'
              type='number'
              min='100'
              className='block px-3 py-3 border border-border focus:border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100 w-full h-10 text-sm transition-colors'
              {...register('code')}
            />
          </div>
          <div className='flex flex-col gap-2 w-full'>
            <label htmlFor='customer' className='flex items-center gap-0.5 font-semibold text-base'>
              <LuUserRound size={18} />
              <span>انتخاب مشتری</span>
              {errors.userId ? <span className='text-red-600 text-xs'>({errors.userId?.message})</span> : ''}
            </label>

            <select
              id='customer'
              defaultValue=''
              className='block px-3 py-2 border border-border focus:border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100 w-full h-10 text-sm transition-colors'
              {...register('userId', { required: 'مشتری رو انتخاب کنید' })}
            >
              <option value=''>مشتری رو انتخاب کنید</option>
              <option value='1'>علی</option>
              <option value='2'>محمد</option>
            </select>
          </div>
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
            className='block px-3 py-3 border border-border focus:border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100 w-full h-10 text-sm transition-colors'
            {...register('pistaType')}
          />
        </div>

        <div className='flex justify-between mb-4'>
          <div className='flex flex-col gap-2'>
            <label htmlFor='gross' className='flex items-center gap-0.5 font-semibold text-base'>
              <LuScale size={18} />
              <span>وزن پر(kg)</span>
              {errors.grossWeight ? <span className='text-red-600 text-xs'>({errors.grossWeight?.message})</span> : ''}
            </label>

            <input
              id='gross'
              type='number'
              className='block px-3 py-3 border border-border focus:border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100 w-full h-10 text-sm transition-colors'
              placeholder='وزن پر  را وارد کنید'
              autoComplete='off'
              {...register('grossWeight', {
                required: 'وزن پر را وارد کنید!',
              })}
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='tare' className='flex items-center gap-0.5 font-semibold text-base'>
              <LuScale size={18} />
              <span> وزن خالی(kg)</span>
              {errors.tareWeight ? <span className='text-red-600 text-xs'>({errors.tareWeight?.message})</span> : ''}
            </label>

            <input
              id='tare'
              type='number'
              className='block px-3 py-3 border border-border focus:border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100 w-full h-10 text-sm transition-colors'
              placeholder='وزن خالی را وارد کنید'
              autoComplete='off'
              {...register('tareWeight')}
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='net' className='flex items-center gap-0.5 font-semibold text-base'>
              <span className='flex items-center gap-0.5 font-semibold text-base'>
                <LuCalculator size={18} />
                <span> وزن خالص(kg)</span>
              </span>
            </label>

            <input
              id='net'
              type='text'
              disabled
              className='block disabled:bg-slate-200 px-3 py-3 border border-border focus:border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100 w-full h-10 text-sm transition-colors disabled:cursor-not-allowed'
              defaultValue={
                netWeight === null ? 'وزن ها تکمیل نیست' : netWeight <= 0 ? 'ورودی وزن اشتباه' : `${netWeight}Kg`
              }
            />
          </div>
          <div className='flex flex-row justify-between bg-net-weight px-3 py-3'>
            <span className=''></span>
          </div>
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

export default DeliveryForm;
