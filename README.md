# Portfolio - React + Node.js + Express

A modern portfolio website built with React for the frontend and Node.js + Express for the backend.

## Project Structure

```
Portfolio/
├── frontend/          # React Vite Application
│   ├── src/
│   │   ├── components/    # React Components
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── index.html
│   └── .env
│
├── backend/           # Express.js Server
│   ├── routes/
│   │   └── portfolio.js
│   ├── controllers/
│   │   └── portfolioController.js
│   ├── server.js
│   ├── package.json
│   └── .env
```

## Installation

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:3000`

## API Endpoints

- `GET /api/portfolio` - Get complete portfolio data
- `GET /api/profile` - Get profile information
- `GET /api/skills` - Get skills list
- `GET /api/projects` - Get projects list
- `GET /api/education` - Get education and training data
- `GET /api/experience` - Get experience data
- `GET /api/contact` - Get contact information
- `POST /api/contact` - Submit contact form
- `GET /health` - Health check

## Features

- ✅ Responsive Design (Mobile & Desktop)
- ✅ Smooth Animations and Transitions
- ✅ Progress Bar Animations on Scroll
- ✅ Material Design Icons
- ✅ Tailwind CSS Styling
- ✅ Contact Form Integration
- ✅ RESTful API Backend
- ✅ CORS Enabled

## Technologies Used

### Frontend
- React 18
- Vite
- Tailwind CSS
- Axios (for API calls)

### Backend
- Node.js
- Express.js
- CORS
- Dotenv

## Building for Production

### Frontend Build:
```bash
cd frontend
npm run build
```

### Running Backend in Production:
```bash
cd backend
npm start
```

## Contact Form Usage

To submit a contact form, send a POST request to `/api/contact` with the following JSON payload:

```json
{
  "name": "Your Name",
  "email": "your.email@example.com",
  "message": "Your message here"
}
```

## Notes

- The frontend is configured to proxy API requests to the backend via Vite
- All portfolio data is currently stored in the backend controller
- For production, consider using a database (MongoDB, PostgreSQL, etc.)
- Email functionality should be added via services like SendGrid or Nodemailer

## License

ISC

## Author

Niman Norbu Sherpa
