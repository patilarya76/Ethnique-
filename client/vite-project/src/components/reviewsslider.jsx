const reviews = [
  {
    name: "Priya",
    short: "Soft and breathable.",
    full: "The cotton is incredibly soft and breathable. It feels light all day and still looks elegant even after long hours.",
  },
  {
    name: "Ananya",
    short: "Elegant everyday wear.",
    full: "Minimal, classy, and perfect for everyday wear. I’ve already ordered another one because it’s so comfortable.",
  },
  {
    name: "Meera",
    short: "Amazing fabric quality.",
    full: "You can really feel the craftsmanship in every thread. The saree drapes beautifully and feels premium.",
  },
];

const ReviewsSlider = () => {
  return (
    <div className="bg-[#F8F5F2] py-14 overflow-hidden">

      <h2 className="text-3xl font-serif text-center mb-10 text-[#2C2C2C]">
        What Our Customers Say
      </h2>

      <div className="overflow-hidden">
        <div className="flex gap-6 animate-scroll hover:[animation-play-state:paused]">

          {[...reviews, ...reviews].map((review, index) => (
            <div
              key={index}
              className="
                group
                min-w-[280px]
                bg-white
                rounded-xl
                border border-[#E8E2DC]
                shadow-sm
                transition-all duration-500
                
                hover:scale-105
                hover:shadow-xl
              "
            >

              {/* Content */}
              <div className="p-5">

                {/* FIXED TEXT CONTAINER (no flicker) */}
                <div className="h-[80px] relative overflow-hidden">

                  {/* Short Text */}
                  <p className="absolute inset-0 text-sm text-gray-600 transition-opacity duration-300 group-hover:opacity-0">
                    “{review.short}”
                  </p>

                  {/* Full Text */}
                  <p className="absolute inset-0 text-sm text-gray-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    “{review.full}”
                  </p>

                </div>

                {/* ⭐ Yellow Stars */}
                <div className="text-yellow-500 text-sm mt-3">
                  ★★★★★
                </div>

                {/* Name */}
                <p className="text-sm font-medium text-[#2C2C2C] mt-1">
                  – {review.name}
                </p>

              </div>

            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default ReviewsSlider;