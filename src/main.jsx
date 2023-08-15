import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from './pages/signin/signin.jsx';
import Signup from './pages/signup/signup';
import Dashboard from './pages/dashboard/dashboard';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/back-office/*" element={<Dashboard/>}/>
        <Route path="/*" element={<Signin/>}/>
      </Routes> 
    </BrowserRouter>
    <ToastContainer />
  </React.StrictMode>
)
