import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './index.css';
import { DojoProvider } from './DojoContext';

async function init() {
  const rootElement = document.getElementById('root');
  if (!rootElement) throw new Error('React root not found');
  const root = ReactDOM.createRoot(rootElement as HTMLElement);


  root.render(
    <React.StrictMode>
      <DojoProvider > 
        <App />
      </DojoProvider>
    </React.StrictMode>
  );
}

init();