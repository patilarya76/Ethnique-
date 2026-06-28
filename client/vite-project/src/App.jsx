import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Home from "./pages/homepage.jsx";
import Login from "./pages/loginpage.jsx";
import Reels from "./pages/reels.jsx";
import AllProducts from "./pages/AllProduct.jsx";
import Navbar from "../src/components/navbar.jsx";
import ProtectedRoute from "../src/pages/admin/ProtectedRoute"; 
import ProductDetails from "./pages/Productdetails.jsx";
// Admin Pages
import AdminLogin from "./pages/admin/AdminLogin.jsx";
import Dashboard from "./pages/admin/Dashboard.jsx";
import Products from "./pages/admin/Products.jsx";
import Orders from "./pages/admin/Orders.jsx";
import Customers from "./pages/admin/Customers.jsx";
import Cart from "./pages/Cart";
import LoyaltyFloating from "../src/components/Loaylatyfloating.jsx";
import Wishlist from "./pages/Wishlist.jsx";
import { Toaster } from "react-hot-toast";
import Footer from "../src/components/Footer.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import ShippingPage from "./pages/ShippingPage.jsx";
import ReturnsPage from "./pages/ReturnsPage.jsx";
import LoyaltyPage from "./pages/loyalty.jsx";

// Admin Layout
import AdminLayout from "./layouts/AdminLayout.jsx";

function AppContent() {
  const location = useLocation();

  const isAdminRoute =
    location.pathname.startsWith("/admin");

  return (
  <>
    {!isAdminRoute && <Navbar />}

    {!isAdminRoute && (
      <LoyaltyFloating />
    )}

    <Routes>

  {/* Customer Routes */}
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<Login />} />
  <Route path="/reels" element={<Reels />} />

  <Route
    path="/products"
    element={<AllProducts />}
  />

  <Route
  path="/products/:id"
  element={<ProductDetails />}
/>
<Route
  path="/cart"
  element={<Cart />}
/>
<Route
  path="/wishlist"
  element={<Wishlist />}
/>

  {/* Admin Login */}
  <Route
    path="/admin/login"
    element={<AdminLogin />}
  />

  {/* Admin Routes */}
  <Route
    path="/admin"
    element={<AdminLayout />}
  >
    <Route
      path="dashboard"
      element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      }
    />

    <Route
      path="products"
      element={
        <ProtectedRoute>
          <Products />
        </ProtectedRoute>
      }
    />

    <Route
      path="orders"
      element={
        <ProtectedRoute>
          <Orders />
        </ProtectedRoute>
      }
    />

    <Route
      path="customers"
      element={
        <ProtectedRoute>
          <Customers />
        </ProtectedRoute>
      }
    />

  </Route>
    <Route path="/about" element={<AboutPage />} />

<Route path="/contact" element={<ContactPage />} />

<Route path="/shipping" element={<ShippingPage />} />

<Route path="/returns" element={<ReturnsPage />} />

<Route path="/loyalty" element={<LoyaltyPage />} />
</Routes>

<Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>

  );
}


export default App;