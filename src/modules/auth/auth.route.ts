import { Router } from 'express';
import { authControllers } from './auth.controlller';

const route = Router();

// route.post('/register', authControllers.registerUser);
route.post('/login', authControllers.loginUser);
export const authRoutes = route;
