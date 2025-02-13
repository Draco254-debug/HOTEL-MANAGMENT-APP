import React, { useState } from 'react';
import axios from 'axios';

const Bookings = () => {
  const [bookingData, setBookingData] = useState({
    room: '',
    checkIn: '',
    checkOut: ''
  });

  const handleBooking = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:5000/api/bookings', bookingData, {
        headers: { 'x-auth-token': token }
      });
      alert('Booking successful!');
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <form onSubmit={handleBooking}>
      {/* Add form fields */}
    </form>
  );
};

export default Bookings;
