const express = require('express');
const cors = require('cors');
const doctors = require('./data/doctors.json');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/doctors', (req, res) => {
  res.json(doctors);
});

app.get('/api/doctors/:id', (req, res) => {
  const doctor = doctors.find(doc => doc.id === req.params.id);
  if (doctor) res.json(doctor);
  else res.status(404).json({ error: 'Doctor not found' });
});

app.post('/api/appointments', (req, res) => {
  const { name, email, datetime } = req.body;
  if (name && email && datetime) {
    res.json({ message: 'Appointment booked successfully' });
  } else {
    res.status(400).json({ error: 'Invalid appointment data' });
  }
});

app.listen(5009, () => {
  console.log('Server running on http://localhost:5009');
});
