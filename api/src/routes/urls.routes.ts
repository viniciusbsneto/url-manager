import { Router } from 'express';

interface URL {
  id: string;
  address: string;
  description: string;
}

const urlsRouter = Router();

const urls: URL[] = [];

export default urlsRouter;
