import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StateProvider } from './components/contextAPI/StateProvider';
import reducer, { initialState } from './components/contextAPI/reducer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>      
      <App />
    </StateProvider>
    
  </React.StrictMode>
);