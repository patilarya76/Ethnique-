const Loyalty = () => {
  return (
    <div className="bg-[#F8F5F2] min-h-screen py-12 px-6">

      <h1 className="text-3xl font-serif text-center mb-6 text-[#2C2C2C]">
        Ethnique Rewards
      </h1>

      <p className="text-center text-gray-600 mb-10">
        Earn points every time you shop and redeem them for exclusive rewards.
      </p>

      {/* How it works */}
      <div className="flex justify-center gap-10 mb-12 text-center">
        <div>🛍️<p>Shop</p></div>
        <div>💰<p>Earn</p></div>
        <div>🎁<p>Redeem</p></div>
      </div>

      {/* Earn */}
      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-sm mb-6">
        <h2 className="text-lg font-semibold mb-3">Ways to Earn</h2>
        <p>✔ 5 points per ₹100 spent</p>
        <p>✔ 50 points on signup</p>
        <p>✔ Refer a friend</p>
      </div>

      {/* Redeem */}
      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-lg font-semibold mb-3">Ways to Redeem</h2>
        <p>100 points = ₹10 off</p>
        <p>500 points = ₹75 off</p>
        <p>1000 points = ₹200 off</p>
      </div>

    </div>
  );
};

export default Loyalty;