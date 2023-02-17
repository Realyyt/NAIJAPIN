import React from 'react';
import {useEffect} from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Home from './container/Home';
import Login from './components/Login';
import { GoogleOAuthProvider } from '@react-oauth/google';


const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const User = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();

    if (!User) navigate('/login');
  }, [navigate]);

  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_API_TOKEN} >
    <Routes>
      <Route path="login"  element={<Login/>}/>
      <Route path="/*"  element={<Home/>}/>
    </Routes>
    </GoogleOAuthProvider>
  )
}

export default App
