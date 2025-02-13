import {Routes, Route} from 'react-router-dom';
import Hotels from './pages/Hotels';
import Login from './pages/Login';
import Register from './pages/Register';
import Bookings from './pages/Bookings';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="app">
     <Navbar />
     <Routes>
       <Route path="/register" element={<Register />} />
       <Route path="/hotels" element={<Hotels />} />
       <Route path="/login" element={<Login />} />
       <Route path="/bookings" element={<Bookings />} />
       <Route path="/dashboard" element={<Dashboard />} />
     </Routes>
    </div>
  );
}

export default App;