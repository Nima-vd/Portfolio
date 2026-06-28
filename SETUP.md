# Quick Start Guide

## Prerequisites
- Node.js (v14 or higher)
- npm or yarn

## Running the Application

### Step 1: Backend Setup & Run

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Start the backend server
npm run dev
```

✅ Backend is running on `http://localhost:5000`

### Step 2: Frontend Setup & Run (in another terminal)

```bash
# Navigate to frontend directory  
cd frontend

# Install dependencies
npm install

# Start the frontend development server
npm run dev
```

✅ Frontend is running on `http://localhost:3000`

## Access the Portfolio

Open your browser and go to: **http://localhost:3000**

## API Documentation

### Get Full Portfolio Data
```
GET /api/portfolio
```

### Get Profile
```
GET /api/profile
```

### Get Skills
```
GET /api/skills
```

### Get Projects
```
GET /api/projects
```

### Get Education & Training
```
GET /api/education
```

### Get Contact Information
```
GET /api/contact
```

### Submit Contact Form
```
POST /api/contact
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Your message here"
}
```

### Health Check
```
GET /health
```

## Key Features

### Frontend Components
- **Header** - Navigation bar with smooth scroll
- **Hero** - Welcome section with CTA buttons
- **About** - Bio and mission statement
- **Skills** - Animated progress bars for skills
- **Projects** - Project cards with hover effects
- **Experience** - Education timeline and training
- **Passions** - Personal interests grid
- **Contact** - Contact information cards
- **Footer** - Footer with navigation links
- **FAB** - Floating action button (mobile)

### Design System
- Custom Tailwind Theme with brand colors
- Material Design Icons
- Responsive Grid Layout
- Smooth Transitions & Animations
- Glass Morphism Navigation

## Development

### Frontend Structure
```
frontend/src/
├── components/
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Experience.jsx
│   ├── Passions.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   └── FAB.jsx
├── App.jsx
├── main.jsx
└── index.css
```

### Backend Structure
```
backend/
├── routes/
│   └── portfolio.js
├── controllers/
│   └── portfolioController.js
├── server.js
└── package.json
```

## Customization

### Change Portfolio Data
Edit `backend/controllers/portfolioController.js` and update the `portfolioData` object.

### Update Tailwind Colors
Edit `frontend/tailwind.config.js` to change the color scheme.

### Add New Sections
Create a new React component in `frontend/src/components/` and import it in `App.jsx`.

## Production Build

### Build Frontend
```bash
cd frontend
npm run build
```

Output will be in `frontend/dist/`

### Deploy Backend
```bash
cd backend
npm start
```

Set environment variables:
- `PORT` - Server port (default: 5000)
- `NODE_ENV` - Environment (development/production)

## Troubleshooting

### Port Already in Use
If port 5000 or 3000 is already in use, change the port in:
- Backend: `.env` file (PORT variable)
- Frontend: `vite.config.js` (server.port)

### CORS Issues
The backend has CORS enabled by default. If you get CORS errors, check:
- Backend is running on `http://localhost:5000`
- Frontend proxy is correctly configured in `vite.config.js`

### Module Not Found
Make sure all dependencies are installed:
```bash
npm install
```

And restart the development servers after installation.

## Support

For issues or questions, refer to the respective framework documentation:
- React: https://react.dev
- Vite: https://vitejs.dev
- Express: https://expressjs.com
- Tailwind CSS: https://tailwindcss.com
