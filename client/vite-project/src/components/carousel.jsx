import { useState, useEffect } from "react";
import "./carousel.css";

import img1 from "../assets/model1.png";
import img2 from "../assets/model2.png";
import img3 from "../assets/model3.png";
import img4 from "../assets/model4.png";
import img5 from "../assets/model5.png";
import img6 from "../assets/model6.png";

const leftImages = [img1, img2];
const centerImages = [img3, img4];
const rightImages = [img5, img6];

const Carousel = () => {
  // const [leftIndex, setLeftIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [rightIndex, setRightIndex] = useState(0);

 useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prev) => (prev + 1) % 2);
  }, 3000);

  return () => clearInterval(interval);
}, []);

  const scrollToProducts = () => {
    document
      .getElementById("featured-sarees")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
  <section className="relative min-h-screen overflow-hidden bg-[#FAF7F2]">

    {/* Soft background */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ffffff_0%,#FAF7F2_45%,#F2ECE3_100%)]"></div>

    <div className="relative z-10 container mx-auto px-8 pt-16">

      {/* Cards */}
      <div className="flex justify-center items-end gap-10">

        {/* Left */}
        <div className="fashion-card left-card">
<div className="image-container">
  {leftImages.map((img, index) => (
    <img
      key={index}
      src={img}
      alt=""
      className={`fade-image ${
        index === currentIndex ? "active" : ""
      }`}
    />
  ))}
</div>
        </div>

        {/* Center */}
        <div className="fashion-card center-card">
          <div className="image-container">
  {centerImages.map((img, index) => (
    <img
      key={index}
      src={img}
      alt=""
      className={`fade-image ${
        index === currentIndex ? "active" : ""
      }`}
    />
  ))}
</div>
        </div>

        {/* Right */}
        <div className="fashion-card right-card">
          <div className="image-container">
  {rightImages.map((img, index) => (
    <img
      key={index}
      src={img}
      alt=""
      className={`fade-image ${
        index === currentIndex ? "active" : ""
      }`}
    />
  ))}
</div>
        </div>

      </div>

      {/* Text */}
      <div className="text-center mt-20">

        {/* <h1 className="text-6xl md:text-5xl font-serif text-[#7A4D2B] leading-tight">
          Elegance Woven In Cotton
        </h1>

        <p className="mt-6 text-lg text-gray-600 tracking-wide">
          Handcrafted Cotton Sarees Designed For Timeless Elegance
        </p> */}

        {/* <button
          onClick={scrollToProducts}
          className="
          mt-10
          px-10
          py-4
          rounded-full
          text-white
          font-medium
          bg-gradient-to-r
          from-[#B8860B]
          to-[#9A6D0A]
          hover:scale-105
          transition-all
          duration-300
          shadow-lg
          "
        >
          Explore Collection
        </button> */}

      </div>

    </div>

  </section>
);
};

export default Carousel;