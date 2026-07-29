# Portfolio - React + Node.js + Express

A production-ready personal portfolio app with a single Vite React frontend and an Express API backend.

## Project Structure

```
Portfolio/
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   ├── config/
│   ├── utils/
│   └── .env.example
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── services/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
├── docs/
│   ├── COMPLETE_GUIDE.md
│   ├── QUICK_REFERENCE.md
│   └── SETUP.md
├── package.json
├── package-lock.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── vercel.json
├── README.md
├── .gitignore
└── .env.example
```

## Installation

### Install dependencies

```bash
npm install
```

### Start the frontend

```bash
npm run dev
```

The frontend is available at http://localhost:3000.

### Start the backend

```bash
npm run backend
```

The backend is available at http://localhost:5000.

## API Endpoints

- GET /api/portfolio - Get complete portfolio data
- GET /api/profile - Get profile information
- GET /api/skills - Get skills list
- GET /api/projects - Get projects list
- GET /api/education - Get education and training data
- GET /api/experience - Get experience data
- GET /api/contact - Get contact information
- POST /api/contact - Submit contact form
- GET /health - Health check

## Build

```bash
npm run build
```

## Notes

- The frontend proxies API requests to the backend via Vite.
- The portfolio data is served from the Express controller in the backend folder.
- The app is ready for a static frontend deployment on Vercel, while the backend can be hosted separately.
