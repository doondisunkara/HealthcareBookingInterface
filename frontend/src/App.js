import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import DoctorProfilePage from './Components/DoctorProfilePage';
import BookAppointmentPage from './Components/BookAppointmentPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/doctor/:id" element={<DoctorProfilePage />} />
        <Route path="/book/:id" element={<BookAppointmentPage />} />
      </Routes>
    </Router>
  );
}

export default App;
