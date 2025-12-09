# Frontend - Medical Dashboard (Expanded)

## Setup
1. cd frontend
2. npm install
3. npm run dev

### Added pages
- Patient: /patient, /patient/appointments, /patient/doctors, /patient/records
- Doctor: /doctor, /doctor/schedule, /doctor/patients
- Admin: /admin, /admin/users, /admin/appointments

Routes expect backend endpoints:
- GET /users (optional ?role=doctor or ?role=patient)
- GET /appointments, GET /appointments/me, POST /appointments
- GET /records/me

Make sure the backend has corresponding endpoints or adapt services.
