import React, { useState } from 'react';
import AddProductButton from './AddProductButton';
import SortButton from './SortButton';
import SearchBar from './SearchBar';
import ProductList from './ProductList';
import EditProductForm from './EditProductForm';
import AddProductForm from './AddProductForm';
import './ProductManagement.css';

const ProductManagement = () => {
  const [products, setProducts] = useState([
    { stt: 1, ma: 'SP001', image: 'mage.jpg', ten: 'Nokia 3.1', gia: '1000000', trangThai: 'Còn hàng' },
    { stt: 2, ma: 'SP002', image: 'image2.jpg', ten: 'iphone 15', gia: '19,990,000', trangThai: 'Hết hàng' },
    { stt: 3, ma: 'SP003', image: 'image3.jpg', ten: 'Galaxy S23 Ultra', gia: '34,490,000', trangThai: 'Còn hàng' },
    { stt: 4, ma: 'SP004', image: 'image4.jpg', ten: 'OPPO Find N3 5G', gia: '41.990.000', trangThai: 'Hết hàng' },
    { stt: 5, ma: 'SP005', image: 'image5.jpg', ten: 'Vertu Constellation Quest', gia: '683,775,000.00', trangThai: 'Còn hàng' },
    { stt: 6, ma: 'SP006', image: 'image6.jpg', ten: 'iPhone 14 Pro Max ', gia: '26,990,000', trangThai: 'Hết hàng' },
  ]);

  const [editingProduct, setEditingProduct] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [filteredProducts, setFilteredProducts] = useState(products);

  const generateProductCode = () => {
    if (products.length === 0) {
      return 'SP001';
    }
    const lastProduct = products[products.length - 1];
    const lastCode = lastProduct.ma;
    const newCodeNumber = parseInt(lastCode.substring(2)) + 1;
    return `SP${newCodeNumber.toString().padStart(3, '0')}`;
  };

  const handleDelete = (stt) => {
    const updatedProducts = products.filter(product => product.stt !== stt);
    const updatedProductsNumbered = updatedProducts.map((product, index) => ({
      ...product,
      stt: index + 1
    }));
    setProducts(updatedProductsNumbered);
    setFilteredProducts(updatedProductsNumbered);
  };

  const handleEdit = (stt) => {
    const product = products.find(product => product.stt === stt);
    setEditingProduct(product);
  };

  const handleSave = (updatedProduct) => {
    const updatedProducts = products.map(product => (product.stt === updatedProduct.stt ? updatedProduct : product));
    setProducts(updatedProducts);
    setFilteredProducts(updatedProducts);
    setEditingProduct(null);
  };

  const handleCancel = () => {
    setEditingProduct(null);
  };

  const handleAddProduct = (newProduct) => {
    const updatedProducts = [...products, { ...newProduct, ma: generateProductCode() }];
    setProducts(updatedProducts);
    setFilteredProducts(updatedProducts);
    setShowAddForm(false);
  };

  const handleSort = (criteria) => {
    let sortedProducts;
    switch (criteria) {
      case 'ten-az':
        sortedProducts = [...products].sort((a, b) => a.ten.localeCompare(b.ten));
        break;
      case 'ten-za':
        sortedProducts = [...products].sort((a, b) => b.ten.localeCompare(a.ten));
        break;
      case 'con-hang':
        sortedProducts = [...products].sort((a, b) => a.trangThai.localeCompare(b.trangThai));
        break;
      case 'het-hang':
        sortedProducts = [...products].sort((a, b) => b.trangThai.localeCompare(a.trangThai));
        break;
      default:
        sortedProducts = products;
    }
    setProducts(sortedProducts);
    setFilteredProducts(sortedProducts);
  };

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = (searchResults) => {
    setFilteredProducts(searchResults);
    setCurrentPage(1); // Reset to first page on new search
  };

  return (
    <div className="product-management">
      <h1>Quản lý sản phẩm</h1>
      <div className="controls">
        {!editingProduct && !showAddForm && (
          <>
            <AddProductButton onClick={() => setShowAddForm(true)} />
            <SortButton onSort={handleSort} />
            <SearchBar products={products} onSearch={handleSearch} />
          </>
        )}
      </div>
      {showAddForm && <AddProductForm onAdd={handleAddProduct} onClose={() => setShowAddForm(false)} />}
      {editingProduct ? (
        <EditProductForm product={editingProduct} onSave={handleSave} onCancel={handleCancel} />
      ) : (
        !showAddForm && <ProductList products={currentProducts} onEdit={handleEdit} onDelete={handleDelete} />
      )}
      {!showAddForm && !editingProduct && (
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, index) => (
            <button 
              key={index + 1} 
              onClick={() => handlePageChange(index + 1)}
              className={currentPage === index + 1 ? 'active' : ''}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductManagement;
