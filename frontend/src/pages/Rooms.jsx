import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Rooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/rooms');
        setRooms(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchRooms();
  }, []);

  return (
    <div>
      <h2>Room List</h2>
      {rooms.map(room => (
        <div key={room._id}>
          <h3>{room.type}</h3>
          <p>Price: ${room.price}/night</p>
        </div>
      ))}
    </div>
  );
};

export default Rooms;
