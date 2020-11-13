import { Router } from 'express';
import URL from '../models/URL';

const urlsRouter = Router();

const urls: URL[] = [];

urlsRouter.post('/', (request, response) => {
  const { address, description } = request.body;

  const urlFound = urls.find(url => url.address === address);

  if (urlFound) {
    return response.status(400).json({ error: 'URL already exists.' });
  }

  const url = new URL(address, description);

  urls.push(url);

  return response.status(201).json(url);
});

export default urlsRouter;
