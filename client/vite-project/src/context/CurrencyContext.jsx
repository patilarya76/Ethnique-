import { createContext, useContext, useState } from "react";

const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState("INR");

  // Example rate (you can update later dynamically)
  const conversionRate = 0.012; // ₹1 ≈ $0.012

  const toggleCurrency = () => {
    setCurrency((prev) => (prev === "INR" ? "USD" : "INR"));
  };

  const convertPrice = (priceInINR) => {
    if (currency === "USD") {
      return (priceInINR * conversionRate).toFixed(2);
    }
    return priceInINR;
  };

  return (
    <CurrencyContext.Provider value={{ currency, toggleCurrency, convertPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => useContext(CurrencyContext);