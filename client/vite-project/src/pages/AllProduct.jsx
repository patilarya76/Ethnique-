import { useEffect, useState } from "react";
import { Heart, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  useContext
} from "react";

import {
  WishlistContext
} from "../context/Wishlistcontext";
import {
  CartContext
} from "../context/CartContext";
import toast from "react-hot-toast";

function AllProducts() {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    const { addToCart } =
      useContext(CartContext);
  const { addToWishlist } =
  useContext(WishlistContext);
  const formatPrice = (price) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
};

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/admin/products"
      );

      const data = await response.json();

      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  const filteredProducts = products.filter((product) =>
    product.name
      ?.toLowerCase()
      .includes(search.toLowerCase())
  );


  
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      {/* Heading */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold">
          All Cotton Sarees
        </h1>

        <p className="text-gray-500 mt-2">
          Browse our complete collection.
        </p>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search sarees..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="
          w-full
          border
          rounded-lg
          p-3
          mb-10
          outline-none
        "
      />

      {/* Product Grid */}
      <div className="grid md:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <div
  key={product._id}
  onClick={() =>
    navigate(
      `/products/${product._id}`
    )
  }
  className="
    cursor-pointer
    bg-white
    rounded-xl
    shadow
    hover:shadow-xl
    transition
  "
>
            <img
              src={product.images?.[0]}
              alt={product.name}
              className="
                w-full
                h-96
                object-cover
              "
            />

            <div className="p-4">

              <h3 className="font-semibold">
                {product.name}
              </h3>

              <p className="text-sm text-gray-500 mt-2">
                {product.highlight}
              </p>

              <div className="flex justify-between items-center mt-4">

                <span className="font-bold text-lg">
                  {formatPrice(product.priceINR)}
                </span>

                <div className="flex gap-3">
{/* Wishlist */}
                  <button
  onClick={(e) => {
    e.stopPropagation();

    addToWishlist(product);

    toast.success(
      "Added to Wishlist"
    );
  }}
>
  <Heart size={20} />
</button>
{/* cart */}
                  <button
  onClick={(e) => {
    e.stopPropagation();

    addToCart(product);

    toast.success(
      "Added to Cart"
    );
  }}
>
  <ShoppingCart size={20} />
</button>

                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-20">
          No sarees found.
        </div>
      )}
    </div>
  );
}

export default AllProducts;