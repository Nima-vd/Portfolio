import express from 'express';
import * as portfolioController from '../controllers/portfolioController.js';

const router = express.Router();

// Portfolio Data Routes
router.get('/profile', portfolioController.getProfile);
router.get('/skills', portfolioController.getSkills);
router.get('/projects', portfolioController.getProjects);
router.get('/education', portfolioController.getEducation);
router.get('/experience', portfolioController.getExperience);
router.get('/contact', portfolioController.getContact);

// POST routes for contact form or messages
router.post('/contact', portfolioController.submitContact);

// All portfolio data in one endpoint
router.get('/portfolio', portfolioController.getFullPortfolio);

export default router;
