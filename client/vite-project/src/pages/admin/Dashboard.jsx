import { useEffect, useState } from "react";

import {
  Package,
  ShoppingBag,
  Users,
  IndianRupee,
} from "lucide-react";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  Tooltip,
} from "recharts";

function Dashboard() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const res = await fetch(
        "https://ethnique.onrender.com/api/admin/dashboard"
      );

      const data = await res.json();

      setStats(data.stats);
    } catch (error) {
      console.log(error);
    }
  };

  if (!stats) {
    return (
      <div className="p-10">
        Loading...
      </div>
    );
  }

  const salesData = [
    { day: "1 May", sales: 25000 },
    { day: "3 May", sales: 35000 },
    { day: "5 May", sales: 28000 },
    { day: "7 May", sales: 45000 },
    { day: "9 May", sales: 40000 },
    { day: "11 May", sales: 52000 },
    { day: "13 May", sales: 35000 },
    { day: "14 May", sales: 46000 },
  ];

  return (
    <div className="bg-[#faf8f7] min-h-screen p-8">

      <div className="mb-10">
        <h1 className="text-4xl font-bold">
          Welcome back, Admin 👋
        </h1>

        <p className="text-gray-500 mt-2">
          Here's what's happening with your store today.
        </p>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">

        <StatCard
          title="Revenue"
          value={`₹${stats.revenue}`}
          icon={<IndianRupee />}
        />

        <StatCard
          title="Orders"
          value={stats.totalOrders}
          icon={<ShoppingBag />}
        />

        <StatCard
          title="Customers"
          value={stats.totalUsers}
          icon={<Users />}
        />

        <StatCard
          title="Products"
          value={stats.totalProducts}
          icon={<Package />}
        />
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mt-8">

        <div className="lg:col-span-2 bg-white rounded-3xl p-6 shadow-sm">

          <h2 className="font-semibold text-xl mb-5">
            Sales Overview
          </h2>

          <div className="h-[350px]">

            <ResponsiveContainer>
              <AreaChart data={salesData}>
                <XAxis dataKey="day" />
                <Tooltip />

                <Area
                  type="monotone"
                  dataKey="sales"
                />
              </AreaChart>
            </ResponsiveContainer>

          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">
          <h2 className="font-semibold text-xl mb-6">
            Recent Orders
          </h2>

          <div className="space-y-4">

            <OrderRow
              id="#ORD1234"
              amount="₹2450"
            />

            <OrderRow
              id="#ORD1233"
              amount="₹1980"
            />

            <OrderRow
              id="#ORD1232"
              amount="₹3250"
            />

            <OrderRow
              id="#ORD1231"
              amount="₹1450"
            />

          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mt-8">

        <div className="bg-white rounded-3xl p-6 shadow-sm">

          <h2 className="font-semibold text-xl mb-6">
            Top Products
          </h2>

          <div className="space-y-4">
            <p>Soft Cotton Saree</p>
            <p>Silk Banarasi Saree</p>
            <p>Linen Cotton Saree</p>
            <p>Chanderi Saree</p>
          </div>

        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">

          <h2 className="font-semibold text-xl mb-6">
            Coupons
          </h2>

          <div className="space-y-4">
            <div>10% OFF</div>
            <div>20% OFF</div>
            <div>50% OFF</div>
          </div>

        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">

          <h2 className="font-semibold text-xl mb-6">
            Quick Actions
          </h2>

          <div className="space-y-4">
            <button className="w-full bg-gray-100 p-4 rounded-xl">
              Add Product
            </button>

            <button className="w-full bg-gray-100 p-4 rounded-xl">
              Create Coupon
            </button>

            <button className="w-full bg-gray-100 p-4 rounded-xl">
              Manage Orders
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}

function StatCard({
  title,
  value,
  icon,
}) {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm">
      <div className="mb-4">
        {icon}
      </div>

      <p className="text-gray-500">
        {title}
      </p>

      <h2 className="text-3xl font-bold">
        {value}
      </h2>
    </div>
  );
}

function OrderRow({
  id,
  amount,
}) {
  return (
    <div className="flex justify-between">
      <span>{id}</span>
      <span>{amount}</span>
    </div>
  );
}

export default Dashboard;