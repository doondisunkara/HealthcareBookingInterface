import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const DoctorProfilePage = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5009/api/doctors/${id}`).then(res => setDoctor(res.data));
  }, [id]);

  if (!doctor) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="p-4 max-w-xl mx-auto">
      <div className="flex flex-col items-center text-center">
        <img src="/doctor-icon.jpg" alt="Doctor" className="h-28 w-28 mx-auto rounded-full object-cover mb-4" />
        <h2 className="text-2xl font-bold">{doctor.name}</h2>
        <p className="text-gray-600">{doctor.specialization}</p>
        <p className={`my-2 ${doctor.availability === 'Available' ? 'text-green-600' : 'text-red-600'}`}>
          Status: {doctor.availability}
        </p>
        <Link
          to={`/book/${doctor.id}`}
          className="mt-4 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
        >
          Book Appointment
        </Link>
      </div>
    </div>
  );
};

export default DoctorProfilePage;