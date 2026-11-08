import DeliveryTable from '../components/deliveries/DeliveryTable';

function Deliveries() {
  return (
    <div className='bg-white mx-auto border border-border rounded-xl max-w-7xl overflow-hidden'>
      <div className='flex justify-between items-center p-5 border-slate-100 border-b'>
        <h3 className='font-semibold text-heading'>لیست ورودی ها</h3>
        <span className='text-muted text-sm'>250 عدد ورودی</span>
      </div>

      <DeliveryTable />
    </div>
  );
}

export default Deliveries;
