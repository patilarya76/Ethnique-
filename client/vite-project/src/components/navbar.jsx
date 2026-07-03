import React, { useState } from "react";
import logo from "../assets/finallogo.jpeg";
import { useLoyalty } from "../context/LoyaltyContext";
import { useAuth } from "../context/AuthContext";
import {
  ShoppingCart,
  User,
  Gift,
  PlayCircle,
  Menu,
  X,
  Heart,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useCurrency } from "../context/CurrencyContext";
import CurrencyToggle from "../components/currencytoggle";
import { useContext } from "react";
import {
  CartContext,
} from "../context/CartContext";
import {
  WishlistContext,
} from "../context/Wishlistcontext";
import {
  CountryContext,
} from "../context/CoutryContext";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const {
  country,
  changeCountry,
} = useContext(CountryContext);
  const navigate = useNavigate();
  const { points } = useLoyalty();
  const { user, logout } = useAuth();

  const { cart } =
    useContext(CartContext);

  const { wishlist } =
    useContext(WishlistContext);

  return (
    <>
      <nav
  className="
    w-full
    bg-white
    border-b
    border-[#E8E2DC]
    sticky
    top-0
    z-50
    shadow-sm
  "
>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
        <div className="flex items-center min-w-[320px]">
  <button
    onClick={() => setMenuOpen(true)}
    className="
      p-2
      rounded-full
      hover:bg-[#F3EEE7]
      transition
    "
  >
    <Menu size={24} />
  </button>

  <Link to="/" className="ml-10">
    <img
      src={logo}
      alt="logo"
      className="h-16 object-contain"
    />
  </Link>
</div>

          {/* Menu */}
          <div className="hidden md:flex items-center gap-8">

            <NavItem to="/" label="Home" />
            <NavItem to="/products" label="Shop" />
            <NavItem to="/collections" label="Collections" />

            <div className="relative">
 <Heart
  size={22}
  onClick={() => navigate("/wishlist")}
  className="
    cursor-pointer
    transition-all
    duration-300
    hover:text-[#8C2F4D]
    hover:scale-110
  "
/>
{/* wishlist */}
  {wishlist.length > 0 && (
    <span
      className="
      absolute
      -top-2
      -right-2
      bg-red-500
      text-white
      text-xs
      rounded-full
      w-5
      h-5
      flex
      items-center
      justify-center
    "
    >
      {wishlist.length}
    </span>
  )}
</div>
{/* cart */}
<div className="relative">
  <ShoppingCart
    size={22}
    className="
      cursor-pointer
      transition-all
      duration-300
      hover:text-[#8C2F4D]
      hover:scale-110
    "
    onClick={() => navigate("/cart")}
  />

  {cart.length > 0 && (
    <span
      className="
      absolute
      -top-2
      -right-2
      bg-black
      text-white
      text-xs
      rounded-full
      w-5
      h-5
      flex
      items-center
      justify-center
      "
    >
      {cart.length}
    </span>
  )}
</div>

            {/* Auth Section */}
           {/* {user ? (
  <div className="flex items-center gap-3">
    <span className="text-xs text-gray-600">
      Hello, {user?.name?.split(" ")[0] || "User"}
    </span>

    <button
      onClick={logout}
      className="text-xs text-red-500"
    >
      Logout
    </button>
  </div>
) : (
  <Link to="/login">
    <User
      size={22}
      className="
        cursor-pointer
        transition-all
        duration-300
        hover:text-[#8C2F4D]
        hover:scale-110
      "
    />
  </Link>
)} */}

{user ? (
  <Link to="/profile">
    <User
      size={22}
      className="
        cursor-pointer
        transition-all
        duration-300
        hover:text-[#8C2F4D]
        hover:scale-110
      "
    />
  </Link>
) : (
  <Link to="/login">
    <User
      size={22}
      className="
        cursor-pointer
        transition-all
        duration-300
        hover:text-[#8C2F4D]
        hover:scale-110
      "
    />
  </Link>
)}

            {/* <CurrencyToggle /> */}
            <select
  value={country}
  onChange={(e) =>
    changeCountry(
      e.target.value
    )
  }
  className="
    border
    rounded-full
    px-3
    py-2
    text-sm
  "
>
  <option value="IND">
    🇮🇳 IND
  </option>

  <option value="USA">
    🇺🇸 USA
  </option>
</select>
</div>    
 </div>
      </nav>
      {/* Overlay */}
{menuOpen && (
  <div
    className="
      fixed
      inset-0
      bg-black/40
      z-40
    "
    onClick={() => setMenuOpen(false)}
  />
)}
<div
  className={`
    fixed
    top-0
    left-0
    h-screen
    w-80
    bg-[#FAF7F2]
    shadow-2xl
    z-50
    flex
    flex-col
    transform
    transition-all
    duration-300
    ${
      menuOpen
        ? "translate-x-0"
        : "-translate-x-full"
    }
  `}
>

  {/* Header */}

 <div className="border-b border-[#E8E2DC] p-6">

  {/* Top Row */}
  <div className="flex items-center justify-between">

    {/* <button
      onClick={() => setMenuOpen(false)}
      className="
        p-2
        rounded-full
        hover:bg-[#F3EEE7]
        transition
      "
    >
      <X size={24} />
    </button> */}

    <h2 className="font-serif text-2xl text-[#6D1830]">
      Menu
    </h2>

  </div>

  {/* User Section */}
  {user && (
    <div className="mt-8">

      <p className="text-xs uppercase tracking-[2px] text-gray-400">
  Welcome Back
</p>

<p className="text-xl font-semibold text-[#6D1830] mt-2">
  {user?.name?.split(" ")[0]}
</p>

      

    </div>
  )}

</div>

<div className="flex-1 overflow-y-auto">

  {/* Main Links */}
  <div className="p-6 space-y-7">

    <Link
      to="/"
      className="block hover:text-[#6D1830]"
      onClick={() => setMenuOpen(false)}
    >
      Home
    </Link>

    <Link
      to="/products"
      className="block hover:text-[#6D1830]"
      onClick={() => setMenuOpen(false)}
    >
      Shop
    </Link>

    <Link
      to="/new-arrivals"
      className="block hover:text-[#6D1830]"
      onClick={() => setMenuOpen(false)}
    >
      New Arrivals
    </Link>

    <Link
      to="/cotton-sarees"
      className="block hover:text-[#6D1830]"
      onClick={() => setMenuOpen(false)}
    >
      Cotton Sarees
    </Link>

    <Link
      to="/silk-sarees"
      className="block hover:text-[#6D1830]"
      onClick={() => setMenuOpen(false)}
    >
      Silk Sarees
    </Link>

    <Link
      to="/festive"
      className="block hover:text-[#6D1830]"
      onClick={() => setMenuOpen(false)}
    >
      Festive Collection
    </Link>

  </div>

  <hr className="mx-6 border-[#E8E2DC]" />

  {/* Secondary Links */}
  <div className="p-6 space-y-5">

    <Link
      to="/loyalty"
      className="block hover:text-[#6D1830]"
      onClick={() => setMenuOpen(false)}
    >
      Loyalty Program
    </Link>

    <Link
      to="/about"
      className="block hover:text-[#6D1830]"
      onClick={() => setMenuOpen(false)}
    >
      About Us
    </Link>

    <Link
      to="/contact"
      className="block hover:text-[#6D1830]"
      onClick={() => setMenuOpen(false)}
    >
      Contact Us
    </Link>

    <Link
      to="/shipping"
      className="block hover:text-[#6D1830]"
      onClick={() => setMenuOpen(false)}
    >
      Shipping Policy
    </Link>

    <Link
      to="/returns"
      className="block hover:text-[#6D1830]"
      onClick={() => setMenuOpen(false)}
    >
      Return Policy
    </Link>
  

  </div>

<div className="p-6 border-t border-[#E8E2DC]">

  <button
    onClick={logout}
    className="
  w-full
  py-3
  rounded-xl
  bg-[#8C2F4D]
  text-white
  font-medium
  hover:bg-[#74263F]
  transition-all
  duration-300
  shadow-sm
"
  >
    Logout
  </button>

</div>
</div>
</div>
    </>
  );
};


const NavItem = ({ label, icon, to }) => (
  <Link
    to={to}
    className="
      relative
      flex
      items-center
      gap-1
      text-[#2B2B2B]
      font-medium
      transition
      hover:text-[#6D1830]
      after:absolute
      after:left-0
      after:-bottom-1
      after:w-0
      after:h-[2px]
      after:bg-[#D4B483]
      after:transition-all
      after:duration-300
      hover:after:w-full
    "
  >
    {icon}
    {label}
  </Link>
);

export default Navbar;