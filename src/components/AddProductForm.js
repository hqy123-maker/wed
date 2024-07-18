import React, { useState } from 'react';

const AddProductForm = ({ onAdd, onClose }) => {
  const [ten, setTen] = useState('');
  const [gia, setGia] = useState('');
  const [image, setImage] = useState('');
  const [trangThai, setTrangThai] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      stt: Date.now(),
      ten,
      gia,
      image,
      trangThai: trangThai ? 'Còn hàng' : 'Hết hàng',
    };
    onAdd(newProduct);
    // Reset form fields after adding product
    setTen('');
    setGia('');
    setImage('');
    setTrangThai(false);
  };

  return (
    <div className="add-product-container">
      <form onSubmit={handleSubmit} className="add-product-form">
        <div className="form-group">
          <label>Tên sản phẩm:</label>
          <input type="text" value={ten} onChange={(e) => setTen(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Giá:</label>
          <input type="text" value={gia} onChange={(e) => setGia(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Hình ảnh:</label>
          <input type="text" value={image} onChange={(e) => setImage(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Trạng thái:</label>
          <input type="checkbox" checked={trangThai} onChange={(e) => setTrangThai(e.target.checked)} /> Còn hàng
        </div>
        <div className="form-actions">
          <button type="submit">
            <i className="fa fa-check" aria-hidden="true"></i> Lưu
          </button>
          <button type="button" onClick={onClose}>
            <i className="fa fa-arrow-circle-left" aria-hidden="true"></i> Quay lại
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProductForm;
