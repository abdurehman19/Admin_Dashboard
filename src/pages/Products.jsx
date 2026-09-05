import React, { useEffect, useState } from "react";
import {
  FiPlus,
  FiSearch,
  FiEdit2,
  FiTrash2,
  FiX,
} from "react-icons/fi";
import "./Products.css";

const API_URL =
  "https://full-stack-assignment-backend.vercel.app/api/products";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);

  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
    image: "",
    description: "",
  });

  // Get Products
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((err) => console.log(err));
  }, []);

  // Add Product
  const addProduct = async () => {
    const token = localStorage.getItem("token");

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: form.name,
          category: form.category,
          price: Number(form.price),
          stock: Number(form.stock),
          image: [form.image],
          description: form.description,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setProducts([...products, data.product]);
        setShowForm(false);

        setForm({
          name: "",
          category: "",
          price: "",
          stock: "",
          image: "",
          description: "",
        });
      } else {
        console.log(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Search
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="products-page">

      {/* Header */}
      <div className="products-header">
        <div>
          <h1>Products</h1>
          <p>Manage your products and inventory</p>
        </div>

        <button
          className="add-product-btn"
          onClick={() => setShowForm(true)}
        >
          <FiPlus />
          Add Product
        </button>
      </div>

      {/* Products Card */}
      <div className="products-card">

        <div className="products-card-top">
          <div>
            <h3>All Products</h3>
            <span>{products.length} products</span>
          </div>

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

        <div className="products-table-wrapper">
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
              {filteredProducts.map((product) => (
                <tr key={product._id}>

                  <td>
                    <div className="product-info">
                      <img
                        src={product.image?.[0]}
                        alt={product.name}
                      />

                      <div>
                        <h4>{product.name}</h4>
                        <span>{product._id}</span>
                      </div>
                    </div>
                  </td>

                  <td>{product.category}</td>
                  <td>${product.price}</td>
                  <td>{product.stock}</td>
                  <td>★ {product.rating}</td>

                  <td>
                    <div className="product-actions">
                      <button className="edit-btn">
                        <FiEdit2 />
                      </button>

                      <button className="delete-btn">
                        <FiTrash2 />
                      </button>
                    </div>
                  </td>

                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>

      {/* Add Product Form */}
      {showForm && (
        <div className="form-overlay">

          <div className="product-form">

            <div className="form-header">
              <h2>Add Product</h2>

              <button onClick={() => setShowForm(false)}>
                <FiX />
              </button>
            </div>

            <input
              type="text"
              placeholder="Product Name"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />

            <input
              type="text"
              placeholder="Category"
              value={form.category}
              onChange={(e) =>
                setForm({ ...form, category: e.target.value })
              }
            />

            <input
              type="number"
              placeholder="Price"
              value={form.price}
              onChange={(e) =>
                setForm({ ...form, price: e.target.value })
              }
            />

            <input
              type="number"
              placeholder="Stock"
              value={form.stock}
              onChange={(e) =>
                setForm({ ...form, stock: e.target.value })
              }
            />

            <input
              type="text"
              placeholder="Image URL"
              value={form.image}
              onChange={(e) =>
                setForm({ ...form, image: e.target.value })
              }
            />

            <textarea
              placeholder="Description"
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
            />

            <button
              className="save-product-btn"
              onClick={addProduct}
            >
              Add Product
            </button>

          </div>
        </div>
      )}

    </div>
  );
};

export default Products;