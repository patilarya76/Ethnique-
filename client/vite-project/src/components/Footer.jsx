import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-10">
      {/* Join Section */}
      <div className="text-center py-10 border-b">
        <h2 className="text-3xl font-semibold tracking-[0.3em] mb-4">
          JOIN THE MOVEMENT
        </h2>

        <div className="max-w-md mx-auto flex">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 border border-gray-300 rounded-l-lg px-4 py-3 outline-none"
          />
          <button className="bg-black text-white px-6 rounded-r-lg">
            Join
          </button>
        </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
        {/* Contact Us */}
        <div>
          <h3 className="uppercase tracking-widest text-sm font-semibold mb-5">
            Contact Us
          </h3>

          <p className="font-semibold mb-2">Ethnique by Jayant</p>

          <p className="text-gray-600 leading-7">
            Corporate Office Address:
            <br />
            Add your business address here
          </p>

          <p className="mt-4 text-gray-600">
            <strong>Email:</strong> support@ethniquebyjayant.com
          </p>

          <p className="mt-2 text-gray-600">
            <strong>Mob:</strong> +91 XXXXX XXXXX
          </p>

          <p className="mt-2 text-gray-600">
            <strong>Opening Hours:</strong> Mon - Sat, 10:00 AM - 7:00 PM
          </p>
        </div>

        {/* Support */}
        <div>
          <h3 className="uppercase tracking-widest text-sm font-semibold mb-5">
            Support
          </h3>

          <ul className="space-y-3 text-gray-600">
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Shipping Policy</li>
            <li>Return & Exchange</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="uppercase tracking-widest text-sm font-semibold mb-5">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-600">
            <li>About Us</li>
            <li>New Arrivals</li>
            <li>Collections</li>
            <li>Track Order</li>
            <li>Size Guide</li>
          </ul>
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