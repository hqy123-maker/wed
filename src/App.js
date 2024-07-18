import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ProductManagement from './components/ProductManagement';
import LoginForm from './components/LoginForm';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true); // Thay đổi trạng thái khi đăng nhập thành công
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Thay đổi trạng thái khi đăng xuất
  };

  return (
    <Router>
      <Header onLogout={handleLogout} />
      <div className="container">
        <Routes>
          <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
          <Route path="/products" element={isLoggedIn ? <ProductManagement /> : <LoginForm onLogin={handleLogin} />} />
          <Route path="/" element={isLoggedIn ? <ProductManagement /> : <LoginForm onLogin={handleLogin} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
