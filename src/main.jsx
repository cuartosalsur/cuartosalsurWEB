import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Theme } from './theme/Theme.jsx';
import { AppRouter } from './routes/AppRouter.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> 
      <Theme>   
        <AppRouter/>
      </Theme>
    </BrowserRouter>
  </React.StrictMode>
)
