import { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const BookAppointmentPage = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({ name: '', email: '', datetime: '' });
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:5009/api/appointments', formData)
      .then((res) => setMessage(res.data.message))
      .catch((err) => setMessage('Failed to book appointment'));
  };

  return (
    <form className="p-4 max-w-md mx-auto flex flex-col gap-4" onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold text-center">Book an Appointment</h2>
      <input
        className="border p-2 w-full rounded"
        placeholder="Patient Name"
        required
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        className="border p-2 w-full rounded"
        placeholder="Email"
        required
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <input
        className="border p-2 w-full rounded"
        type="datetime-local"
        required
        onChange={(e) => setFormData({ ...formData, datetime: e.target.value })}
      />
      <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition" type="submit">
        Book
      </button>
      {message && <p className="text-center text-blue-600">{message}</p>}
    </form>
  );
};

export default BookAppointmentPage;