import React from 'react';

const AddProductButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="add-product-button" style={{ backgroundColor: '#007bff', color: 'white' }}>
      <i className="fa fa-plus-square-o" aria-hidden="true"></i> Thêm sản phẩm
    </button>
  );
};

export default AddProductButton;
