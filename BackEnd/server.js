import express, { json, urlencoded } from 'express';
import configuration from './config/configuration.js';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/userRoutes.js';
import postRoutes from './routes/postRoutes.js';
import './config/db.js';
import { checkUser, requireAuth } from './middleware/authMiddleware.js';
const app = express();
import cors from 'cors';

const corsOptions = {
  origin: configuration.apiClient,
  credentials: true,
  allowedHeaders: ['Content-Type'],
  methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
  preflightContinue: false,
};
app.use(cors(corsOptions));

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cookieParser());

// jwt
app.get('*', checkUser);
app.get('/jwtid', requireAuth, (req, res) => {
  res.status(200).send(res.locals.user._id);
});

// routes
app.use('/api/user', userRoutes);
app.use('/api/post', postRoutes);

// server
app.listen(configuration.port, () => {
  console.log(`Listening on port ${configuration.port}`);
});
