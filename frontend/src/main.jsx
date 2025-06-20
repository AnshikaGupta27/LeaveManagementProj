import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './index.css';
import authContext from './context/authContext.jsx';

const AuthContext = authContext; // alias for JSX to work

createRoot(document.getElementById('root')).render(
  <AuthContext>
    <App />
  </AuthContext>
);

