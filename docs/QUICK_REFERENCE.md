# Quick Reference Guide

## File Structure Tree

```
Portfolio/
│
├── 📄 README.md ........................ Main project documentation
├── 📄 SETUP.md ........................ Setup and installation guide
├── 📄 INDEX.md ........................ Detailed project documentation
│
├── 📁 frontend/ ........................ React Vite Application
│   ├── 📁 src/
│   │   ├── 📁 components/ ............ React Components
│   │   │   ├── 📄 Header.jsx
│   │   │   ├── 📄 Hero.jsx
│   │   │   ├── 📄 About.jsx
│   │   │   ├── 📄 Skills.jsx
│   │   │   ├── 📄 Projects.jsx
│   │   │   ├── 📄 Experience.jsx
│   │   │   ├── 📄 Passions.jsx
│   │   │   ├── 📄 Contact.jsx
│   │   │   ├── 📄 Footer.jsx
│   │   │   └── 📄 FAB.jsx
│   │   ├── 📄 App.jsx .............. Main React component
│   │   ├── 📄 main.jsx ............. React entry point
│   │   └── 📄 index.css ............ Global styles & animations
│   ├── 📄 index.html ............... HTML template
│   ├── 📄 package.json ............. Dependencies & scripts
│   ├── 📄 vite.config.js ........... Vite build config
│   ├── 📄 tailwind.config.js ....... Tailwind theme config
│   ├── 📄 postcss.config.js ........ PostCSS plugins
│   ├── 📄 .env ..................... Environment variables
│   ├── 📄 .env.example ............. Example env file
│   └── 📄 .gitignore ............... Git ignore patterns
│
└── 📁 backend/ ........................ Express.js API
    ├── 📁 routes/
    │   └── 📄 portfolio.js ......... API route definitions
    ├── 📁 controllers/
    │   └── 📄 portfolioController.js Business logic & data
    ├── 📄 server.js ............... Express server setup
    ├── 📄 package.json ............ Dependencies & scripts
    ├── 📄 .env .................... Environment variables
    ├── 📄 .env.example ............ Example env file
    └── 📄 .gitignore .............. Git ignore patterns
```

## Installation & Running

### Backend
```bash
cd backend
npm install
npm run dev
# Runs on http://localhost:5000
```

### Frontend  
```bash
cd frontend
npm install
npm run dev
# Runs on http://localhost:3000
```

## Available Scripts

### Frontend
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

### Backend
```bash
npm run dev      # Start with nodemon
npm start        # Start production server
```

## API Quick Reference

```bash
# Get all data
curl http://localhost:5000/api/portfolio

# Get specific sections
curl http://localhost:5000/api/profile
curl http://localhost:5000/api/skills
curl http://localhost:5000/api/projects
curl http://localhost:5000/api/education
curl http://localhost:5000/api/contact

# Submit contact form
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"John","email":"john@example.com","message":"Hi"}'

# Health check
curl http://localhost:5000/health
```

## Component Dependencies

```
App
├── Header (Navigation)
├── Hero (Welcome)
├── About (Bio)
├── Skills (Progress bars)
├── Projects (Showcase)
├── Experience (Education + Training)
├── Passions (Interests)
├── Contact (Form)
├── Footer (Credits)
└── FAB (Mobile button)
```

## Key Technologies

| Technology | Purpose | Version |
|-----------|---------|---------|
| React | UI Framework | 18.2 |
| Vite | Build Tool | 4.4 |
| Tailwind CSS | Styling | 3.3 |
| Express | Backend | 4.18 |
| Node.js | Runtime | 14+ |
| Axios | HTTP Client | 1.6 |
| CORS | Cross-Origin | 2.8 |

## Environment Variables

### Frontend (.env)
```
VITE_API_URL=http://localhost:5000/api
```

### Backend (.env)
```
PORT=5000
NODE_ENV=development
```

## Common Ports

| Service | Default Port | URL |
|---------|--------------|-----|
| Frontend | 3000 | http://localhost:3000 |
| Backend | 5000 | http://localhost:5000 |
| Backend API | 5000 | http://localhost:5000/api |

## Customization Quick Tips

### Change Profile Name
**File**: `backend/controllers/portfolioController.js`
```javascript
profile: {
  name: 'Your Name',  // Change here
  // ...
}
```

### Change Primary Color
**File**: `frontend/tailwind.config.js`
```javascript
colors: {
  "primary": "#006492",  // Change hex code
  // ...
}
```

### Add New Skill
**File**: `backend/controllers/portfolioController.js`
```javascript
skills: [
  // ...
  { icon: 'icon_name', name: 'Skill Name', percentage: 85 },
]
```

### Add New Project
**File**: `backend/controllers/portfolioController.js`
```javascript
projects: [
  // ...
  {
    id: 4,
    title: 'Project Name',
    description: 'Description',
    tag: 'Technology',
    imageSrc: 'image_url',
    link: '#'
  },
]
```

## Styling Classes Available

### Custom Tailwind Classes
```css
/* Predefined sizes */
stack-xs: 8px
stack-sm: 16px
stack-md: 32px
stack-lg: 64px
stack-xl: 128px
container-max: 1120px
gutter: 24px

/* Font families */
font-label-sm, font-label-md
font-body-md, font-body-lg
font-headline-sm, font-headline-md
font-display-lg, font-display-lg-mobile

/* Colors */
Primary: #006492
On-primary: #ffffff
Surface: #faf8ff
Background: #faf8ff
Error: #ba1a1a
Secondary: #5c5f61
```

## Debugging Tips

### Check Backend
```bash
curl http://localhost:5000/health
# Should return: {"status": "OK", "message": "Portfolio API is running"}
```

### Check Frontend Console
```javascript
// In browser console
console.log(import.meta.env.VITE_API_URL)
```

### View Request/Response
1. Open DevTools (F12)
2. Go to Network tab
3. Reload page
4. Check API calls

## Performance Tips

1. **Images**: Use optimized formats (WebP)
2. **Caching**: Enable browser caching
3. **Compression**: Enable gzip compression
4. **Lazy Loading**: Implement for below-fold content
5. **Code Splitting**: Use React.lazy() for components

## Security Checklist

- [ ] Remove sensitive data from code
- [ ] Use environment variables
- [ ] Validate form inputs
- [ ] Enable CORS properly
- [ ] Use HTTPS in production
- [ ] Add rate limiting
- [ ] Sanitize user inputs
- [ ] Update dependencies regularly

## Deployment Checklist

### Frontend
- [ ] Build project (`npm run build`)
- [ ] Test build locally (`npm run preview`)
- [ ] Update API URL in `.env`
- [ ] Deploy to hosting (Vercel, Netlify, etc.)
- [ ] Set up custom domain

### Backend
- [ ] Set production environment variables
- [ ] Enable HTTPS
- [ ] Set up error logging
- [ ] Configure email service
- [ ] Test all API endpoints
- [ ] Deploy to server (Railway, Render, etc.)
- [ ] Set up monitoring

## Version Control

```bash
# Initialize git
git init

# Create commits
git add .
git commit -m "Initial commit"

# Ignore files
# .gitignore is already configured
```

## Getting Help

- **React Issues**: https://react.dev
- **Express Issues**: https://expressjs.com
- **Tailwind Issues**: https://tailwindcss.com
- **Vite Issues**: https://vitejs.dev
- **Node.js Issues**: https://nodejs.org

## Important Notes

⚠️ **Before deploying:**
- Update contact information in backend
- Replace placeholder images
- Test contact form functionality
- Verify all links work
- Check mobile responsiveness
- Update social media links

📝 **To add new features:**
- Frontend: Create component in `src/components/`
- Backend: Add route and controller method
- API: Update frontend API calls

🎨 **To customize design:**
- Edit `frontend/tailwind.config.js` for colors
- Edit `frontend/src/index.css` for animations
- Edit individual components for structure
