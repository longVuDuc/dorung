import React from 'react';
import { BrowserRouter  as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Product_Detail from './pages/Product_detail';
import Mangage_product from './pages/Manage_product';
import Login from './pages/Login';
import SignUp from './pages/signup';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Product_Detail" element={<Product_Detail />} />
        <Route path="/Mangage_product" element={<Mangage_product />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;