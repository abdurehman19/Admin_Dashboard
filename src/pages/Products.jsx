import React, { useEffect, useState } from "react";
import {
  FiPlus,
  FiSearch,
  FiEdit2,
  FiTrash2,
} from "react-icons/fi";

import "./Products.css";

const API_URL = "http://localhost:5000/api/products";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const loadProducts = async () => {
    try {
      setLoading(true);

      const response = await fetch(API_URL);
      const data = await response.json();

      // Agar backend direct array return kare
      if (Array.isArray(data)) {
        setProducts(data);
      }

      // Agar backend { products: [] } return kare
      else if (Array.isArray(data.products)) {
        setProducts(data.products);
      }

      // Agar backend { data: [] } return kare
      else if (Array.isArray(data.data)) {
        setProducts(data.data);
      }
    } catch (error) {
      console.error("Products load error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="products-page">

      {/* Header */}
      <div className="products-header">

        <div>
          <h1>Products</h1>
          <p>Manage your products and inventory</p>
        </div>

        <button className="add-product-btn">
          <FiPlus />
          Add Product
        </button>

      </div>


      {/* Products Card */}
      <div className="products-card">

        {/* Top */}
        <div className="products-card-top">

          <div>
            <h3>All Products</h3>

            <span>
              {products.length} products
            </span>
          </div>


          {/* Search */}
          <div className="products-search">

            <FiSearch />

            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

          </div>

        </div>


        {/* Table */}
        <div className="products-table-wrapper">

          {loading ? (
            <div className="products-loading">
              Loading products...
            </div>
          ) : (
            <table className="products-table">

              <thead>
                <tr>
                  <th>Product</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Stock</th>
                  <th>Rating</th>
                  <th>Action</th>
                </tr>
              </thead>


              <tbody>

                {filteredProducts.length === 0 ? (
                  <tr>
                    <td
                      colSpan="6"
                      className="no-products"
                    >
                      No products found
                    </td>
                  </tr>
                ) : (

                  filteredProducts.map((product) => (

                    <tr key={product._id}>

                      {/* Product */}
                      <td>

                        <div className="product-info">

                          <img
                            src={
                              product.image?.[0] ||
                              product.image ||
                              "/placeholder.png"
                            }
                            alt={product.name}
                          />

                          <div>
                            <h4>{product.name}</h4>

                            <span>
                              ID: {product._id?.slice(-6)}
                            </span>
                          </div>

                        </div>

                      </td>


                      {/* Category */}
                      <td>
                        {product.category}
                      </td>


                      {/* Price */}
                      <td>
                        ${product.price}
                      </td>


                      {/* Stock */}
                      <td>

                        <span
                          className={
                            product.stock > 0
                              ? "stock available"
                              : "stock out"
                          }
                        >
                          {product.stock > 0
                            ? `${product.stock} in stock`
                            : "Out of stock"}
                        </span>

                      </td>


                      {/* Rating */}
                      <td>
                        <span className="rating">
                          ★ {product.rating || 0}
                        </span>
                      </td>


                      {/* Actions */}
                      <td>

                        <div className="product-actions">

                          <button
                            className="edit-btn"
                            title="Edit Product"
                          >
                            <FiEdit2 />
                          </button>

                          <button
                            className="delete-btn"
                            title="Delete Product"
                          >
                            <FiTrash2 />
                          </button>

                        </div>

                      </td>

                    </tr>

                  ))

                )}

              </tbody>

            </table>
          )}

        </div>

      </div>

    </div>
  );
};

export default Products;