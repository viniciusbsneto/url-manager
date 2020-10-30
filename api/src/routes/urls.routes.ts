import { Router } from 'express';
import URL from '../models/URL';

const urlsRouter = Router();

const urls: URL[] = [];

urlsRouter.post('/', (request, response) => {
  const { address, description } = request.body;

  const url = new URL(address, description);

  urls.push(url);

  return response.json(url);
});

export default urlsRouter;
