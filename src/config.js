import {config as dotenv} from "dotenv";
dotenv();

export const config = {
  // host: 'localhost',
  // user: 'root',
  // password: '73437784Marco',
  // database: 'suscripcionesdb'
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
}