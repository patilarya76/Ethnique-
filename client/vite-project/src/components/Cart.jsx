import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import {
  Trash2,
  ShoppingCart
} from "lucide-react";
import { CountryContext }
from "../context/CoutryContext";


function Cart() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);
  const { formatPrice } =
    useContext(CountryContext);
  
  const total = cart.reduce(
    (sum, item) =>
      sum + item.priceINR * item.quantity,
    
  );

  return (
    <div className="bg-[#faf7f5] min-h-screen">
  <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-5xl font-bold mb-10">
        Shopping Cart
      </h1>

      {cart.length === 0 ? (
        <div className="text-center py-32">
  <ShoppingCart
    size={60}
    className="mx-auto mb-4"
  />

  <h2 className="text-3xl font-bold">
    Your Cart is Empty
  </h2>

  <p className="text-gray-500 mt-3">
    Add beautiful sarees to begin shopping.
  </p>
</div>
      ) : (
        <>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* <div className="lg:col-span-2 space-y-6"> </div> */}

            {cart.map((item) => (
              <div
                key={item._id}
                className="
  flex
  gap-6
  bg-white
  p-6
  rounded-3xl
  shadow-md
  hover:shadow-xl
  transition-all
"
              >
                <img
                  src={item.images?.[0]}
                  alt={item.name}
                  className="
  w-44
  h-60
  object-cover
  rounded-2xl
"
                />

                <div className="flex-1">
                  <h2 className="font-bold text-xl">
                    {item.name}
                  </h2>

                  <p className="text-gray-500 mt-2">
                    {item.fabric}
                  </p>

                  <p className="mt-4 font-bold">
                    {formatPrice(item.priceINR)}


                  </p>

                 <div className="flex items-center gap-3 mt-4">

  <button
    onClick={() =>
      decreaseQuantity(item._id)
    }
    className="
  w-10
  h-10
  rounded-full
  border
  text-lg
"
  >
    -
  </button>

  <span>
    {item.quantity}
  </span>

  <button
    onClick={() =>
      increaseQuantity(item._id)
    }
    className="
  w-10
  h-10
  rounded-full
  border
  text-lg
"
  >
    +
  </button>

</div>
                </div>

                <button
  onClick={() =>
    removeFromCart(item._id)
  }
  className="
    text-red-500
    hover:scale-110
    transition
  "
>
  <Trash2 />
</button>
              </div>
            ))}
          </div>

         <div
  className="
    mt-10
    bg-white
    p-8
    rounded-3xl
    shadow-lg
  "
>
  <h2 className="text-2xl font-bold">
    Order Summary
  </h2>

  <div className="flex justify-between mt-6">
    <span>Subtotal</span>

    <span>
      {formatPrice(total)}
    </span>
  </div>

  <div className="flex justify-between mt-3">
    <span>Shipping</span>

    <span>Free</span>
  </div>

  <hr className="my-6" />

  <div className="flex justify-between">
    <span className="font-bold">
      Total
    </span>

    <span className="font-bold text-xl text-[#8B1E3F]">
      {formatPrice(total)}
    </span>
  </div>

  <button
    className="
      w-full
      mt-6
      bg-[#8B1E3F]
      text-white
      py-4
      rounded-xl
      font-semibold
      hover:opacity-90
    "
  >
    Proceed To Checkout
  </button>
</div>
        </>
      )}
      
    </div>
    </div>

  );
}


export default Cart;