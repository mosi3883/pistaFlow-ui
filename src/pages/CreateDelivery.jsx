import DeliveryForm from '../components/deliveries/DeliveryForm';

function CreateDelivery() {
  return (
    <>
      <div className='mb-6'>
        <h2 className='mb-2 font-semibold text-heading text-2xl'>افزودن ورودی</h2>
        <p className='text-muted text-sm'>مدیریت اطلاعات پسته های ورودی کارخانه</p>
      </div>
      <div className='bg-white mx-auto px-3 py-4 border border-border rounded-xl max-w-3xl overflow-hidden'>
        <DeliveryForm />
      </div>
    </>
  );
}

export default CreateDelivery;
