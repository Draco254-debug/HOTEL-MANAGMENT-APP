const router = require('express').Router();
const Hotel = require('../models/Hotel');
const auth = require('../middleware/auth');

// Get all hotels
router.get('/', auth, async (req, res) => {
    try {
        const hotels = await Hotel.find().populate('rooms');
        res.json(hotels);
    } catch (err) {
        res.status(500).json(err.message);
    }
});

// Create new hotel (Admin only)
router.post('/', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        if (user.role !== 'admin') return res.status(403).json('Admin access required');

        const newHotel = new Hotel(req.body);
        await newHotel.save();
        res.status(200).json(newHotel);
    } catch (err) {
        res.status(500).json(err.message);
    }
});

// Update hotel details (Admin only)

module.exports = router;