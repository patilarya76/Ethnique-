const express = require("express");
const router = express.Router();

const User = require("../models/User");
const authMiddleware = require("../middleware/authMiddleware");

// Get all addresses of logged-in user
router.get(
  "/",
  authMiddleware,
  async (req, res) => {
    try {
      const user = await User.findById(
        req.user.id
      );

      res.json(user.addresses);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
);

// Add new address
router.post(
  "/",
  authMiddleware,
  async (req, res) => {
    try {
      console.log(
  "USER ID:",
  req.user.id
);

console.log(
  "BODY:",
  req.body
);
      const user = await User.findById(
        req.user.id
      );
      console.log(
  "BEFORE SAVE:",
  user.addresses.length
);

      user.addresses.push({
        fullName: req.body.fullName,
        phone: req.body.phone,
        addressLine1: req.body.addressLine1,
        addressLine2: req.body.addressLine2,
        city: req.body.city,
        state: req.body.state,
        pincode: req.body.pincode,
        country: req.body.country,
      });

      await user.save(); 
      console.log(
  "AFTER SAVE:",
  user.addresses.length
);

      res.json({
        success: true,
        addresses: user.addresses,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
);

// Delete address
router.delete(
  "/:addressId",
  authMiddleware,
  async (req, res) => {
    try {
      const user = await User.findById(
        req.user.id
      );

      user.addresses =
        user.addresses.filter(
          (address) =>
            address._id.toString() !==
            req.params.addressId
        );

      await user.save();

      res.json({
        success: true,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
);

module.exports = router;