import { Request, Response } from "express"
import express from 'express';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';


const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== 'test'
  })
);

const PORT = process.env.PORT || 3000;

const start = async () => {
  // if (!process.env.JWT_KEY) {
  //   throw new Error('JWT_KEY must be defined');
  // }

  // try {
  //   await mongoose.connect('mongodb://auth-mongo-srv:27017/auth');

  //   console.log('Connected to MongoDb');
  // } catch (err) {
  //   console.error(err);
  // }

  app.listen(PORT, () => {
    console.log(`Listening on port localhost:${PORT}`);
  });
};

start();