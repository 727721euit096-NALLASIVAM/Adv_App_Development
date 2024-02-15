// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import PlansPage from './components/PlansPage';
import RechargePage from './components/RechargePage';
import PaymentHistory from './components/PaymentHistory';
import UserAuth from './components/UserAuth';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import './App.css';
import Admin from './Admin/Admin';
import Adhome from './Admin/AdHome';
import AdminLogIn from './components/AdminLogIn';


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/plans" element={<PlansPage />} />
        <Route path="/recharge" element={<RechargePage />} />
        <Route path="/history" element={<PaymentHistory />} />
        <Route path="/auth" element={<UserAuth />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgetpassword" element={<ForgotPassword />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/AdminLogIn" element={<AdminLogIn />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/AdHome" element={<Adhome />} />
       
      
      </Routes>
    </Router>
  );
};

export default App;
