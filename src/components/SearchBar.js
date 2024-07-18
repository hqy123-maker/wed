import React, { useState } from 'react';

const SearchBar = ({ products, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    if (searchTerm.trim() === '') {
      onSearch(products); // Nếu không có từ khóa, hiển thị toàn bộ danh sách
      return;
    }

    const filteredProducts = products.filter(product =>
      product.ten.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (filteredProducts.length === 0) {
      onSearch(products); // Giữ nguyên danh sách nếu không tìm thấy sản phẩm
    } else {
      onSearch(filteredProducts);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Nhập từ khóa..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <button onClick={handleSearchClick}>
        <i className="fa fa-search" aria-hidden="true"></i> Tìm kiếm
      </button>
    </div>
  );
};

export default SearchBar;
