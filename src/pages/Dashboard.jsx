import React from "react";
import {
  FiPackage,
  FiUsers,
  FiShoppingCart,
  FiDollarSign,
  FiTrendingUp,
  FiArrowUpRight,
} from "react-icons/fi";

import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">

      {/* Page Header */}
      <div className="dashboard-header">
        <div>
          <h1>Dashboard</h1>
          <p>Welcome back! Here's what's happening today.</p>
        </div>

        <button className="dashboard-btn">
          View Reports
        </button>
      </div>


      {/* Stats Cards */}
      <div className="stats-grid">

        {/* Products */}
        <div className="stat-card">
          <div className="stat-card-top">
            <div className="stat-icon purple">
              <FiPackage />
            </div>

            <span className="stat-growth">
              <FiTrendingUp />
              12.5%
            </span>
          </div>

          <p>Total Products</p>

          <h2>1,248</h2>

          <span className="stat-description">
            Compared to last month
          </span>
        </div>


        {/* Users */}
        <div className="stat-card">
          <div className="stat-card-top">
            <div className="stat-icon blue">
              <FiUsers />
            </div>

            <span className="stat-growth">
              <FiTrendingUp />
              8.2%
            </span>
          </div>

          <p>Total Users</p>

          <h2>8,549</h2>

          <span className="stat-description">
            Compared to last month
          </span>
        </div>


        {/* Orders */}
        <div className="stat-card">
          <div className="stat-card-top">
            <div className="stat-icon orange">
              <FiShoppingCart />
            </div>

            <span className="stat-growth">
              <FiTrendingUp />
              15.4%
            </span>
          </div>

          <p>Total Orders</p>

          <h2>3,642</h2>

          <span className="stat-description">
            Compared to last month
          </span>
        </div>


        {/* Revenue */}
        <div className="stat-card">
          <div className="stat-card-top">
            <div className="stat-icon green">
              <FiDollarSign />
            </div>

            <span className="stat-growth">
              <FiTrendingUp />
              18.6%
            </span>
          </div>

          <p>Total Revenue</p>

          <h2>$24,560</h2>

          <span className="stat-description">
            Compared to last month
          </span>
        </div>

      </div>


      {/* Middle Section */}
      <div className="dashboard-grid">

        {/* Revenue Card */}
        <div className="dashboard-card revenue-card">

          <div className="card-header">
            <div>
              <h3>Revenue Overview</h3>
              <p>Monthly revenue statistics</p>
            </div>

            <button className="card-filter">
              This Year
            </button>
          </div>


          {/* Simple Chart */}
          <div className="chart">

            <div className="chart-lines">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="chart-bars">
              <div className="bar" style={{ height: "45%" }}></div>
              <div className="bar" style={{ height: "60%" }}></div>
              <div className="bar" style={{ height: "40%" }}></div>
              <div className="bar" style={{ height: "70%" }}></div>
              <div className="bar" style={{ height: "55%" }}></div>
              <div className="bar" style={{ height: "80%" }}></div>
              <div className="bar" style={{ height: "65%" }}></div>
              <div className="bar" style={{ height: "90%" }}></div>
              <div className="bar" style={{ height: "72%" }}></div>
              <div className="bar" style={{ height: "85%" }}></div>
              <div className="bar" style={{ height: "75%" }}></div>
              <div className="bar" style={{ height: "95%" }}></div>
            </div>

            <div className="chart-months">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
              <span>Jul</span>
              <span>Aug</span>
              <span>Sep</span>
              <span>Oct</span>
              <span>Nov</span>
              <span>Dec</span>
            </div>

          </div>

        </div>


        {/* Sales Card */}
        <div className="dashboard-card sales-card">

          <div className="card-header">
            <div>
              <h3>Sales</h3>
              <p>Sales performance</p>
            </div>

            <FiArrowUpRight className="card-arrow" />
          </div>

          <div className="sales-number">
            <h2>$18,245</h2>

            <span>
              +14.5%
            </span>
          </div>


          <div className="sales-progress">

            <div className="progress-label">
              <span>Target</span>
              <span>$25,000</span>
            </div>

            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>

            <p>72.9% of monthly target</p>

          </div>

        </div>

      </div>


      {/* Recent Orders */}
      <div className="dashboard-card orders-card">

        <div className="card-header">
          <div>
            <h3>Recent Orders</h3>
            <p>Latest customer orders</p>
          </div>

          <button className="view-all-btn">
            View All
          </button>
        </div>


        <div className="orders-table-wrapper">

          <table className="orders-table">

            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Product</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>


            <tbody>

              <tr>
                <td>#ORD-1024</td>

                <td>
                  <div className="customer">
                    <div className="customer-avatar">A</div>
                    <span>Abdul Rehman</span>
                  </div>
                </td>

                <td>Premium T-Shirt</td>

                <td>$120</td>

                <td>
                  <span className="status delivered">
                    Delivered
                  </span>
                </td>
              </tr>


              <tr>
                <td>#ORD-1023</td>

                <td>
                  <div className="customer">
                    <div className="customer-avatar">M</div>
                    <span>Muhammad Ali</span>
                  </div>
                </td>

                <td>Classic Jacket</td>

                <td>$250</td>

                <td>
                  <span className="status pending">
                    Pending
                  </span>
                </td>
              </tr>


              <tr>
                <td>#ORD-1022</td>

                <td>
                  <div className="customer">
                    <div className="customer-avatar">S</div>
                    <span>Sarah Khan</span>
                  </div>
                </td>

                <td>Casual Hoodie</td>

                <td>$180</td>

                <td>
                  <span className="status shipped">
                    Shipped
                  </span>
                </td>
              </tr>


              <tr>
                <td>#ORD-1021</td>

                <td>
                  <div className="customer">
                    <div className="customer-avatar">H</div>
                    <span>Hassan Ahmed</span>
                  </div>
                </td>

                <td>Denim Jeans</td>

                <td>$95</td>

                <td>
                  <span className="status delivered">
                    Delivered
                  </span>
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;