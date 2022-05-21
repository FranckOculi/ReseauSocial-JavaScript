// 'use strict';
import dotenv from 'dotenv';
dotenv.config({ path: './config/.env' });

const data = {
  apiClient: process.env.API_CLIENT,
  dbTable: process.env.DB_TABLE,
  dbUrl: process.env.DB_URL,
  port: process.env.PORT,
  server: process.env.DB_SERVER,
  tokenSecret: process.env.TOKEN_SECRET,
  user: process.env.DB_USER,
};

export default data;
