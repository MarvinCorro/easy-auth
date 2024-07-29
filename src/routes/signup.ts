import express from 'express';
import { Request, Response } from 'express';

const router = express.Router();

router.post('/api/users/login', (req: Request, res: Response) => {
  res.send('Hi there!');
});