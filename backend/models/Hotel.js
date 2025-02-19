const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    description: String,
    amenities: [String],
    rooms: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Room' }]
});

module.exports = mongoose.model('Hotel', hotelSchema);