import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { apiRoutes } from './api';
import { NotFoundError } from './utils/notFoundError';
import { ExpressErrorHandler } from './utils/ExpressErrorHandler';
import session from 'express-session';

dotenv.config();
const app = express();

app.set('trust proxy', true);
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'secret',
    name: 'qid',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 30,
      httpOnly: true,
      sameSite: 'lax',
      secure: false,
    },
  })
);

app.use('/api/auth', apiRoutes);

//! Not found page error
app.all('*', NotFoundError);

// ! Error Handlers
app.use(ExpressErrorHandler);

export default app;
