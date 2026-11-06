import { Route, Routes } from 'react-router';
import AppLayout from './ui/AppLayout';
import Dashboard from './pages/Dashboard';
import Customers from './pages/Customers';
import CreateDelivery from './pages/CreateDelivery';

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Dashboard />} />
        <Route path='/customers' element={<Customers />} />\
        <Route path='/deliveries' element={<p>ورودی ها</p>} />
        <Route path='/deliveries/new' element={<CreateDelivery />} />
        <Route path='/accounting' element={<p>حسابداری</p>} />
        <Route path='/reports' element={<p>گزارش ها</p>} />
        <Route path='/settings' element={<p>تنظیمات</p>} />
      </Route>
    </Routes>
  );
}

export default App;
