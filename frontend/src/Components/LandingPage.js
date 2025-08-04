import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const [doctors, setDoctors] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5009/api/doctors').then(res => setDoctors(res.data));
  }, []);

  const filtered = doctors.filter(doc =>
    doc.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Healthcare Appointment Booking</h1>
      <input
        className="border p-2 mb-4 w-full rounded"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search doctors..."
      />

      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4">
        {filtered.map((doc) => (
          <Link
            key={doc.id}
            to={`/doctor/${doc.id}`}
            className="flex w-full sm:w-[48%] gap-4 items-center border rounded-lg p-4 shadow hover:shadow-md transition"
          >
            <img src="/doctor-icon.jpg" alt="Doctor" className="h-20 w-20 rounded-full object-cover" />
            <div className="flex-1">
              <h2 className="text-lg font-semibold">{doc.name}</h2>
              <p className="text-sm text-gray-600">{doc.specialization}</p>
              <p className={`text-sm ${doc.availability === 'Available' ? 'text-green-600' : 'text-red-600'}`}>
                Status: {doc.availability}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;