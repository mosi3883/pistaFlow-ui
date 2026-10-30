import CustomerHeader from '../components/customers/CustomerHeader';
import CustomerTable from '../components/customers/CustomerTable';

function Customers() {
  return (
    <>
      <CustomerHeader />
      <div className='bg-white p-6 border border-slate-200 rounded-xl'>
        <p className='mb-3 text-muted text-sm'>۱۸۶ مشتری</p>
        <CustomerTable />
      </div>
    </>
  );
}

export default Customers;
