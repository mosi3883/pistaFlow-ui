import CustomerHeader from '../components/customers/CustomerHeader';
import CustomerTable from '../components/customers/CustomerTable';

function Customers() {
  return (
    <>
      <CustomerHeader />
      <div className='bg-white p-6 border border-slate-200 rounded-xl overflow-hidden'>
        <div className='flex justify-between items-center mb-1 p-5 border-slate-100 border-b'>
          <h3 className='font-semibold text-heading'>لیست مشتریان</h3>
          <span className='text-muted text-sm'>۱۸۶ مشتری</span>
        </div>
        <div>
          <CustomerTable />
        </div>
      </div>
    </>
  );
}

export default Customers;
