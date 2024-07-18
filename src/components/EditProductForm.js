import React, { useState, useEffect } from 'react';
import './EditProductForm.css';

const EditProductForm = ({ product, onSave, onCancel }) => {
  const [ten, setTen] = useState('');
  const [gia, setGia] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [trangThai, setTrangThai] = useState(false);

  useEffect(() => {
    if (product) {
      setTen(product.ten);
      setGia(product.gia);
      setImageUrl(product.image);
      setTrangThai(product.trangThai === 'Còn hàng');
    }
  }, [product]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProduct = {
      ...product,
      ten,
      gia,
      image: imageUrl,
      trangThai: trangThai ? 'Còn hàng' : 'Hết hàng',
    };
    onSave(updatedProduct);
  };

  return (
    <form onSubmit={handleSubmit} className="edit-product-form">
      <div className="form-group">
        <label>Tên sản phẩm:</label>
        <input
          type="text"
          value={ten}
          onChange={(e) => setTen(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Giá:</label>
        <input
          type="text"
          value={gia}
          onChange={(e) => setGia(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Hình ảnh:</label>
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Trạng thái:</label>
        <input
          type="checkbox"
          checked={trangThai}
          onChange={(e) => setTrangThai(e.target.checked)}
        /> Còn hàng
      </div>
      <div className="form-actions">
        <button type="submit">
          <i className="fa fa-check" aria-hidden="true"></i> Lưu lại
        </button>
        <button type="button" onClick={onCancel}>
          <i className="fa fa-arrow-circle-left" aria-hidden="true"></i> Trở lại
        </button>
      </div>
    </form>
  );
};

export default EditProductForm;
