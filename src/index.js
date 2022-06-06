import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StateProvider } from './components/contextAPI/StateProvider';
import reducer, { initialState } from './components/contextAPI/reducer';
import firebaseConfig from './firebase-config';
import {FirebaseAppProvider} from 'reactfire';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>      
      (
        <FirebaseAppProvider firebaseConfig={firebaseConfig}>
          <App />
        </FirebaseAppProvider>
      )
    </StateProvider>
    
  </React.StrictMode>
);
