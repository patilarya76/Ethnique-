import {
  createContext,
  useState,
} from "react";

export const CountryContext =
  createContext();

export const CountryProvider = ({
  children,
}) => {
  const [country, setCountry] =
    useState(
      localStorage.getItem(
        "country"
      ) || "IND"
    );

  const changeCountry = (
    newCountry
  ) => {
    setCountry(newCountry);

    localStorage.setItem(
      "country",
      newCountry
    );
  };

  const USD_RATE = 0.012;

  const formatPrice = (
  priceINR
) => {
  if (country === "IND") {
    return `₹${priceINR}`;
  }

  return `$${(
    priceINR * 0.012
  ).toFixed(2)}`;
};

  return (
    <CountryContext.Provider
      value={{
  country,
  changeCountry,
  formatPrice,
}}
    >
      {children}
    </CountryContext.Provider>
  );
};