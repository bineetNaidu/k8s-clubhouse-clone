import { Router } from 'express';
import { login } from './login';
import { register } from './register';
import { validateRegister, validateLogin } from '../utils/validations';
import { logout } from './logout';
import { validateRequest } from '../middlewares/validateRequest';

const r = Router();

r.post('/register', validateRegister, validateRequest, register);
r.post('/login', validateLogin, validateRequest, login);
r.post('/logout', logout);

export { r as apiRoutes };
