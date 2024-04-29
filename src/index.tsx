import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store'; // Import your Redux store
import App from './App';
import reportWebVitals from './reportWebVitals'; // Import reportWebVitals

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// Call reportWebVitals if available
reportWebVitals();
