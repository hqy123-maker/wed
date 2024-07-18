import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ onLogout }) => {
  return (
    <header>
      <div className="logo">Phone Store Manager</div>
      <nav>
        <ul>
          <li>

          </li>
          <li>
            <Link to="/products">Quản Lý Sản Phẩm</Link>
          </li>
          <li>
            <button onClick={onLogout} className="logout-button">Đăng Xuất</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
