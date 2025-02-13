const router = require('express').Router();
const Booking = require('../models/Booking');
const auth = require('../middleware/auth');

// Create booking
router.post('/', auth, async (req, res) => {
  try {
    const { room, checkIn, checkOut, totalPrice } = req.body;
    const booking = new Booking({
      user: req.user.id,
      room,
      checkIn,
      checkOut,
      totalPrice
    });
    await booking.save();
    res.status(201).json(booking);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});