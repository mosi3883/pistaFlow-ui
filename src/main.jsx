import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <Toaster
        toastOptions={{
          success: {
            duration: 3500,
          },
          error: {
            duration: 5000,
          },
        }}
      />
    </BrowserRouter>
  </StrictMode>,
);
