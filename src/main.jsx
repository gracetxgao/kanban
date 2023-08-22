import React from 'react'
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Auth0Provider
      domain="dev-fgvtmeuortr1ndkv.us.auth0.com"
      clientId="nw9VRD21qp2zbn6CqcLE30zU1MJG98ew"
      authorizationParams={{
        redirect_uri: "http://localhost:5173"
      }}
    >
      <App />
    </Auth0Provider>  
  </BrowserRouter>

);
