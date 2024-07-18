import React, { useState } from 'react';
import './ProductList.css';

const ProductList = ({ products, onEdit, onDelete }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleRowClick = (product) => {
    setSelectedProduct(product.stt === selectedProduct ? null : product.stt); // Toggle selection
  };

  return (
    <div className='body'>
      <div className="product-list-container">
        <h2 className="header-title">Danh Sách Sản Phẩm</h2>
        <table className="product-list">
          <thead>
            <tr>
              <th>STT</th>
              <th>Mã</th>
              <th>Hình ảnh</th>
              <th>Tên</th>
              <th>Giá</th>
              <th>Trạng thái</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr 
                key={product.stt}
                onClick={() => handleRowClick(product)}
                className={selectedProduct === product.stt ? 'selected' : ''}
              >
                <td>{product.stt}</td>
                <td>{product.ma}</td>
                <td><img src={product.image} alt={product.ten} width="50" /></td>
                <td>{product.ten}</td>
                <td>{product.gia}</td>
                <td className={product.trangThai === 'Còn hàng' ? 'in-stock' : 'out-of-stock'}>
                  {product.trangThai}
                </td>
                <td>
                  <button className="button-edit" onClick={() => onEdit(product.stt)}>
                    <i className="fa fa-pencil" aria-hidden="true"></i> Sửa
                  </button>
                  <button className="button-delete" onClick={() => onDelete(product.stt)}>
                    <i className="fa fa-trash" aria-hidden="true"></i> Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
