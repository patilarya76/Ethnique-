import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaPinterestP,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#faf7f2] mt-16">
      {/* Join Section */}
      {/* Brand Timeline */}
<div className="py-13 bg-[#faf7f2]">

  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-center  mr-10 text-5xl font-serif mb-4 text-[#1f2a44]">
  Our Journey
</h2>

    <p className="text-center text-gray-500 mb-14">
      A celebration of timeless Indian craftsmanship.
    </p>

    <div className="relative">

      {/* Line */}
      <div className="hidden md:block absolute top-5 left-0 w-full h-[1px] bg-[#d4b06a]" />

      <div className="grid md:grid-cols-4 gap-10 relative">

        <div className="text-center transition-all duration-300 hover:-translate-y-2">
          <div className="w-10 h-10 mx-auto rounded-full bg-[#b8860b] border-4 border-white shadow-md mb-4 transition-all duration-300 hover:scale-125 hover:shadow-xl" />
          <h3 className="font-semibold text-lg">
            2020
          </h3>
          <p className="text-gray-600 mt-2">
            Ethnique was founded with a vision to
            celebrate India's weaving heritage.
          </p>
        </div>

        <div className="text-center transition-all duration-300 hover:-translate-y-2">
          <div className="w-10 h-10 mx-auto rounded-full bg-[#b8860b] border-4 border-white shadow-md mb-4 transition-all duration-300 hover:scale-125 hover:shadow-xl" />
          <h3 className="font-semibold text-lg">
            2022
          </h3>
          <p className="text-gray-600 mt-2">
            Expanded our handcrafted saree
            collections across India.
          </p>
        </div>

        <div className="text-center transition-all duration-300 hover:-translate-y-2">
          <div className="w-10 h-10 mx-auto rounded-full bg-[#b8860b] border-4 border-white shadow-md mb-4 transition-all duration-300 hover:scale-125 hover:shadow-xl" />
          <h3 className="font-semibold text-lg">
            2024
          </h3>
          <p className="text-gray-600 mt-2">
            Introduced exclusive handloom and
            festive collections.
          </p>
        </div>

        <div className="text-center transition-all duration-300 hover:-translate-y-2">
          <div className="w-10 h-10 mx-auto rounded-full bg-[#b8860b] border-4 border-white shadow-md mb-4 transition-all duration-300 hover:scale-125 hover:shadow-xl" />
          <h3 className="font-semibold text-lg">
            Today
          </h3>
          <p className="text-gray-600 mt-2">
            Bringing timeless elegance to women
            across the country.
          </p>
        </div>

      </div>

    </div>

  </div>

</div>

      {/* <div className="border-t border-gray-200"> */}

  {/* <div className="max-w-7xl mx-auto px-6 py-10"> */}

    {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

      <div>
        <h4 className="font-semibold">
          🚚 Free Shipping
        </h4>

        <p className="text-sm text-gray-500">
          Across India
        </p>
      </div>

      <div>
        <h4 className="font-semibold">
          🔒 Secure Payments
        </h4>

        <p className="text-sm text-gray-500">
          Safe Checkout
        </p>
      </div>

      <div>
        <h4 className="font-semibold">
          ↩ Easy Returns
        </h4>

        <p className="text-sm text-gray-500">
          Hassle Free
        </p>
      </div>

      <div>
        <h4 className="font-semibold">
          ⭐ Premium Quality
        </h4>

        <p className="text-sm text-gray-500">
          Handpicked Fabrics
        </p>
      </div> */}

    {/* </div> */}

  {/* </div> */}

{/* </div> */}

      {/* Footer Content */}
      {/* Main Footer */}
<div className="max-w-7xl mx-auto px-6 py-16">

  <div className="grid md:grid-cols-4 gap-12">

    {/* Brand */}
    <div>
      <h2 className="text-2xl font-serif text-[#b8860b] mb-4">
        ETHNIQUE
      </h2>

      <p className="text-gray-600 leading-7">
        Celebrating timeless Indian
        craftsmanship through elegant
        handcrafted sarees designed
        for modern women.
      </p>

      <div className="flex gap-4 mt-6">

        <a
          href="#"
          className="hover:text-[#b8860b] transition"
        >
          <FaInstagram size={20} />
        </a>

        <a
          href="#"
          className="hover:text-[#b8860b] transition"
        >
          <FaFacebookF size={20} />
        </a>

        <a
          href="#"
          className="hover:text-[#b8860b] transition"
        >
          <FaPinterestP size={20} />
        </a>

      </div>
    </div>

    {/* Shop */}
    <div>
      <h3 className="uppercase tracking-[3px] text-sm font-semibold mb-5">
        Shop
      </h3>

      <ul className="space-y-3 text-gray-600">
        <li className="hover:text-[#b8860b] cursor-pointer">
          New Arrivals
        </li>

        <li className="hover:text-[#b8860b] cursor-pointer">
          Cotton Sarees
        </li>

        <li className="hover:text-[#b8860b] cursor-pointer">
          Handloom Collection
        </li>

        <li className="hover:text-[#b8860b] cursor-pointer">
          Festive Collection
        </li>
      </ul>
    </div>

    {/* Support */}
    <div>
      <h3 className="uppercase tracking-[3px] text-sm font-semibold mb-5">
        Support
      </h3>

      <ul className="space-y-3 text-gray-600">
        <li className="hover:text-[#b8860b] cursor-pointer">
          Contact Us
        </li>

        <li className="hover:text-[#b8860b] cursor-pointer">
          FAQs
        </li>

        <li className="hover:text-[#b8860b] cursor-pointer">
          Shipping Policy
        </li>

        <li className="hover:text-[#b8860b] cursor-pointer">
          Returns
        </li>

        <li className="hover:text-[#b8860b] cursor-pointer">
          Privacy Policy
        </li>
      </ul>
    </div>

    {/* Contact */}
    <div>
      <h3 className="uppercase tracking-[3px] text-sm font-semibold mb-5">
        Contact
      </h3>

      <div className="space-y-3 text-gray-600">

        <p>
          support@ethniquebyjayant.com
        </p>

        <p>
          +91 XXXXX XXXXX
        </p>

        <p>
          Mon - Sat
          <br />
          10:00 AM - 7:00 PM
        </p>

      </div>
    </div>

  </div>

</div>
      {/* Bottom Footer */}
      <div className="border-t border-gray-300 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Ethnique by Jayant. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;