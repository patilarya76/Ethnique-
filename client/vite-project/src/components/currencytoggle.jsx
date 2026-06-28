import { useCurrency } from "../context/CurrencyContext";

const CurrencyToggle = () => {
  const { currency, toggleCurrency } = useCurrency();

  return (
    <div
      onClick={toggleCurrency}
      className="relative flex items-center w-24 h-9 bg-[#F1ECE7] rounded-full cursor-pointer p-1 transition"
    >
      {/* Sliding Background */}
      <div
        className={`absolute top-1 left-1 w-10 h-7 bg-white rounded-full shadow-sm transition-all duration-300 ${
          currency === "USD" ? "translate-x-12" : ""
        }`}
      ></div>

      {/* Labels */}
      <div className="flex justify-between w-full px-2 text-xs font-medium z-10">
        <span className={currency === "INR" ? "text-black" : "text-gray-400"}>
          ₹
        </span>
        <span className={currency === "USD" ? "text-black" : "text-gray-400"}>
          $
        </span>
      </div>
    </div>
  );
};

export default CurrencyToggle;