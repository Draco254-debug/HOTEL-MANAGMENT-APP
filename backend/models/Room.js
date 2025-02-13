const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    hotel: {type: mongoose.Schema.Types.ObjectId, ref: 'Hotel', required: true},
    type: { type: String, required: true },
    price: { type: Number, required: true },
    capacity: { type: Number, required: true },
    available: {type: Boolean, required: true},
    bookings: [{type: mongoose.Schema.Types.ObjectId, ref: 'Booking'}]
});

module.exports = mongoose.model('Room', roomSchema);