import React from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App.jsx'
import './index.css'
import LoginButton from './Login.jsx';
import LogoutButton from './Logout.jsx';

const root = createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider
    domain="dev-fgvtmeuortr1ndkv.us.auth0.com"
    clientId="nw9VRD21qp2zbn6CqcLE30zU1MJG98ew"
    authorizationParams={{
      redirect_uri: "http://localhost:5173"
    }}
  >
    <LoginButton>Log In</LoginButton>
    <LogoutButton>Log Out</LogoutButton>
    <App />
  </Auth0Provider>,
);
