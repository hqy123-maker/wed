import React from 'react';
import { Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const SortButton = ({ onSort }) => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        Sắp xếp
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => onSort('ten-az')}>Tên A-Z</Dropdown.Item>
        <Dropdown.Item onClick={() => onSort('ten-za')}>Tên Z-A</Dropdown.Item>
        <Dropdown.Item onClick={() => onSort('con-hang')}>Còn hàng</Dropdown.Item>
        <Dropdown.Item onClick={() => onSort('het-hang')}>Hết hàng</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default SortButton;
