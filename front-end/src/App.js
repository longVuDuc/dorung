import React from 'react';
import { BrowserRouter  as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Product_Detail from './pages/Product_detail';
import Login from './pages/Login';
import Dashboard from './admin/dashboard';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Product_Detail/:id" element={<Product_Detail />} />
        <Route path="/Login" element={<Login />} />
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </Router>
  );
}

export default App;