const Loyalty = () => {
  const earnPoints = [
    {
      title: "Create Account",
      points: "50 Points",
      icon: "👤",
    },
    {
      title: "Place an Order",
      points: "5 Points per ₹100",
      icon: "🛍️",
    },
    {
      title: "Refer a Friend",
      points: "200 Points",
      icon: "🎉",
    },
  ];

  const rewards = [
    {
      points: "100",
      reward: "₹10 OFF",
    },
    {
      points: "500",
      reward: "₹75 OFF",
    },
    {
      points: "1000",
      reward: "₹200 OFF",
    },
  ];

  return (
    <div className="bg-[#F8F5F2] min-h-screen">

      {/* Hero */}
      <div className="bg-[#6D1830] text-white py-16 px-6 text-center">
        <h1 className="text-5xl font-serif mb-4">
          Ethnique Rewards
        </h1>

        <p className="max-w-2xl mx-auto text-lg opacity-90">
          Shop your favorite sarees, earn points,
          and unlock exclusive rewards with every purchase.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-14">

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">

          <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
            <div className="text-5xl mb-4">🛍️</div>
            <h3 className="font-semibold text-xl">
              Shop
            </h3>
            <p className="text-gray-600 mt-2">
              Purchase your favourite collections.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
            <div className="text-5xl mb-4">💰</div>
            <h3 className="font-semibold text-xl">
              Earn
            </h3>
            <p className="text-gray-600 mt-2">
              Collect points with every order.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
            <div className="text-5xl mb-4">🎁</div>
            <h3 className="font-semibold text-xl">
              Redeem
            </h3>
            <p className="text-gray-600 mt-2">
              Use points to save on future purchases.
            </p>
          </div>

        </div>

        {/* Earn Points */}
        <h2 className="text-3xl font-serif text-center mb-8 text-[#6D1830]">
          Ways To Earn
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-16">

          {earnPoints.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-6 shadow-sm text-center"
            >
              <div className="text-4xl mb-3">
                {item.icon}
              </div>

              <h3 className="font-semibold text-lg">
                {item.title}
              </h3>

              <p className="text-[#8C2F4D] font-medium mt-2">
                {item.points}
              </p>
            </div>
          ))}

        </div>

        {/* Redeem */}
        <h2 className="text-3xl font-serif text-center mb-8 text-[#6D1830]">
          Redeem Your Rewards
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {rewards.map((item) => (
            <div
              key={item.points}
              className="
                bg-white
                rounded-2xl
                p-8
                shadow-sm
                text-center
                hover:shadow-lg
                transition
              "
            >
              <h3 className="text-4xl font-bold text-[#8C2F4D]">
                {item.points}
              </h3>

              <p className="mt-3 text-gray-600">
                Redeem for
              </p>

              <p className="text-xl font-semibold mt-2">
                {item.reward}
              </p>
            </div>
          ))}

        </div>

      </div>

    </div>
  );
};

export default Loyalty;