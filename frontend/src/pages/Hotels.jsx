import { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography } from '@mui/material';

const Hotels = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/hotels');
        setHotels(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchHotels();
  }, []);

  return (
    <div>
      <Typography variant="h4" gutterBottom>Hotel List</Typography>
      {hotels.map(hotel => (
        <Card key={hotel._id} sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="h5">{hotel.name}</Typography>
            <Typography variant="body2">{hotel.location}</Typography>
            <Typography variant="body2">Rooms: {hotel.rooms.length}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Hotels;