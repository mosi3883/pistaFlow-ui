import DashboardLayout from '../components/dashboard/DashboardLayout';
function Dashboard() {
  return (
    <>
      <div className='mb-6'>
        <h1 className='font-semibold text-heading text-2xl'>داشبورد</h1>
        <p className='mt-2 text-muted text-sm'>نمای کلی فعالیت کارخانه در فصل برداشت فعال</p>
      </div>
      <DashboardLayout />
    </>
  );
}

export default Dashboard;
