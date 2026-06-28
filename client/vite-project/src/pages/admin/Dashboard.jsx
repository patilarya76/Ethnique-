import { useEffect, useState } from "react";

function Dashboard() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const res = await fetch(
        "http://localhost:5000/api/admin/dashboard"
      );

      const data = await res.json();

      setStats(data.stats);
    } catch (error) {
      console.log(error);
    }
  };

  if (!stats) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">
        Ethnique Admin Dashboard
      </h1>

      <div className="grid grid-cols-4 gap-5">
        <div className="bg-white shadow rounded p-5">
          <h3>Customers</h3>
          <h1>{stats.totalUsers}</h1>
        </div>

        <div className="bg-white shadow rounded p-5">
          <h3>Products</h3>
          <h1>{stats.totalProducts}</h1>
        </div>

        <div className="bg-white shadow rounded p-5">
          <h3>Orders</h3>
          <h1>{stats.totalOrders}</h1>
        </div>

        <div className="bg-white shadow rounded p-5">
          <h3>Revenue</h3>
          <h1>₹{stats.revenue}</h1>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;