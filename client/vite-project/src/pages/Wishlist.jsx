// import {
//   useContext
// } from "react";

// import {
//   WishlistContext
// } from "../context/WishlistContext";

// function Wishlist() {
//   const {
//     wishlist,
//     removeFromWishlist,
//   } = useContext(
//     WishlistContext
//   );

//   return (
//     <div className="max-w-7xl mx-auto p-10">

//       <h1 className="text-4xl font-bold mb-8">
//         Wishlist
//       </h1>

//       {wishlist.map((item) => (
//         <div
//           key={item._id}
//           className="
//             flex
//             justify-between
//             py-4
//             border-b
//           "
//         >
//           <div>
//             {item.name}
//           </div>

//           <button
//             onClick={() =>
//               removeFromWishlist(
//                 item._id
//               )
//             }
//           >
//             Remove
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Wishlist; 

import { useContext } from "react";
import {
  WishlistContext,
} from "../context/Wishlistcontext";
import {
  Heart,
  ShoppingCart
} from "lucide-react";
import { CartContext } from "../context/CartContext";


function Wishlist() {
  const {
    wishlist,
    removeFromWishlist,
  } = useContext(WishlistContext); 

  const { addToCart } =
  useContext(CartContext);

if (wishlist.length === 0) {
  return (
    <div className="text-center py-32">
      <Heart
        size={60}
        className="mx-auto mb-4"
      />

      <h2 className="text-3xl font-bold">
        Your Wishlist is Empty
      </h2>

      <p className="text-gray-500 mt-3">
        Save your favourite sarees here.
      </p>
    </div>
  );
}
  return (
    <div className="max-w-7xl mx-auto p-8">

      <h1 className="text-4xl font-bold mb-8">
        My Wishlist
      </h1>



      <div className="grid md:grid-cols-4 gap-8">

        {wishlist.map((item) => (
         <div
  key={item._id}
  className="
    bg-white
    rounded-3xl
    overflow-hidden
    shadow-md
    hover:shadow-xl
    transition-all
    duration-300
  "
>
            <img
              src={item.images?.[0]}
              alt={item.name}
              className="
  h-[420px]
  w-full
  object-cover
"
            />

            <div className="p-5">

  <h2 className="font-semibold text-lg">
    {item.name}
  </h2>

  <p className="text-2xl font-bold mt-2 text-[#8B1E3F]">
    ₹{item.priceINR}
  </p>

  <div className="flex gap-3 mt-5">

    <button
  onClick={() => addToCart(item)}
  className="
    flex-1
    bg-[#8B1E3F]
    text-white
    py-3
    rounded-xl
  "
>
  Add To Cart
</button>

    <button
      onClick={() =>
        removeFromWishlist(item._id)
      }
      className="
        border
        p-3
        rounded-xl
      "
    >
      <Heart size={18} />
    </button>

  </div>

</div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Wishlist;