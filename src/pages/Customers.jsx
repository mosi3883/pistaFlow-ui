import CustomerHeader from '../components/customers/CustomerHeader';
import CustomerSearch from '../components/customers/CustomerSearch';
import CustomerTable from '../components/customers/CustomerTable';

function Customers() {
  return (
    <>
      <CustomerHeader />
      <div className='bg-white border border-slate-200 rounded-xl overflow-hidden'>
        <div className='flex justify-between items-center p-5 border-slate-100 border-b'>
          <h3 className='font-semibold text-heading'>لیست مشتریان</h3>
          <span className='text-muted text-sm'>۱۸۶ مشتری</span>
        </div>
        <CustomerSearch />

        <CustomerTable />
      </div>
    </>
  );
}

export default Customers;
