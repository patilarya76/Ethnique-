import { createContext, useContext, useState } from "react";

const LoyaltyContext = createContext();

export const LoyaltyProvider = ({ children }) => {
  const [points, setPoints] = useState(120); // default demo

  // Add points
  const addPoints = (amount) => {
    setPoints((prev) => prev + amount);
  };

  // Redeem points
  const redeemPoints = (amount) => {
    setPoints((prev) => Math.max(prev - amount, 0));
  };

  return (
    <LoyaltyContext.Provider value={{ points, addPoints, redeemPoints }}>
      {children}
    </LoyaltyContext.Provider>
  );
};

export const useLoyalty = () => useContext(LoyaltyContext);