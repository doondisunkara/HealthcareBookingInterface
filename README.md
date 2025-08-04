# 🩺 NirogGyan – Healthcare Appointment Booking Interface

This is a responsive web application built for NirogGyan’s Frontend-Focused Full Stack Developer Assignment. It allows users to view doctors, check their availability, and book appointments.

---

## 🚀 Live Demo (Optional)

> _Add link here if deployed on Vercel/Render._

---

## 📁 Project Structure

```
niroggyan/
├── backend/        # Node.js + Express API
│   ├── server.js
│   └── data/doctors.json
└── frontend/       # React + JavaScript + Tailwind (Flexbox)
    ├── src/
    │   ├── Components/
    │   └── App.js, index.js, etc.
    └── public/index.html
```

---

## 🛠 Tools & Libraries Used

### 💻 Frontend

- React (JavaScript)
- Axios
- React Router DOM
- Tailwind CSS (with Flexbox layout)

### 🔧 Backend

- Node.js
- Express.js
- CORS

---

## 🔍 Features

- 🔎 View a list of doctors (name, specialization, availability)
- 👤 Doctor detail page with appointment option
- 📝 Book an appointment (Name, Email, Date/Time)
- 💻 Responsive layout (mobile & desktop) using Flexbox
- ✅ Live validation + user feedback

---

## 💡 Improvements with More Time

- Add authentication for admin or doctors
- Persist appointments in a real database (e.g., MongoDB or PostgreSQL)
- Add doctor schedule and slot-based booking
- Create admin panel to view/manage appointments
- Search filter by specialization
- Better UI/UX polish (animations, skeleton loaders, etc.)

---

## 🧩 Challenges Faced & Solutions

| Challenge | Solution |
|----------|----------|
| Axios network errors due to backend port mismatch | Ensured backend runs on port `5009` and used correct URLs/proxy |
| React couldn't find backend due to CORS | Enabled `cors()` middleware in Express |
| Layout issues in smaller screens | Used `flex-col`, `flex-wrap`, `w-full`, and `max-w-*` to make UI responsive |
| Missing `index.html` caused app crash | Re-created standard `public/index.html` from CRA template |

---
