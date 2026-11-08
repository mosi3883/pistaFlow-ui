import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router';
import { ToastContainer } from 'react-toastify';
import DatePicker from 'react-multi-date-picker';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {/* <App /> */}
      <DatePicker calendar='persian' locale='fa' />
      <ToastContainer />
    </BrowserRouter>
  </StrictMode>,
);
