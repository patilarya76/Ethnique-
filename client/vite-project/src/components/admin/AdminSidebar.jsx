import { Link, useNavigate } from "react-router-dom";

function AdminSidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminInfo");

    navigate("/admin/login");
  };

  return (
    <div
      style={{
        width: "250px",
        background: "#1f2937",
        color: "white",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h2>Ethnique Admin</h2>

      <Link
        to="/admin/dashboard"
        style={{ color: "white", margin: "10px 0" }}
      >
        Dashboard
      </Link>

      <Link
        to="/admin/products"
        style={{ color: "white", margin: "10px 0" }}
      >
        Products
      </Link>

      <Link
        to="/admin/orders"
        style={{ color: "white", margin: "10px 0" }}
      >
        Orders
      </Link>

      <Link
        to="/admin/customers"
        style={{ color: "white", margin: "10px 0" }}
      >
        Customers
      </Link>
     <Link to="/admin/reels">
  Reels
</Link>

      <button
        onClick={handleLogout}
        style={{
          marginTop: "auto",
          padding: "10px",
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default AdminSidebar;