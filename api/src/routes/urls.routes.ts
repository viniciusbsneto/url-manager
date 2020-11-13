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

urlsRouter.get('/', (request, response) => {
  return response.json(urls);
});

urlsRouter.get('/:id', (request, response) => {
  const { id } = request.params;

  const urlFound = urls.find(url => url.id === id);

  if (!urlFound) {
    return response.status(400).json({ error: 'URL not found.' });
  }

  return response.status(200).json(urlFound);
});

urlsRouter.delete('/:id', (request, response) => {
  const { id } = request.params;

  const urlFound = urls.find(url => url.id === id);

  if (!urlFound) {
    return response.status(400).json({ error: 'URL not found.' });
  }

  const index = urls.indexOf(urlFound);
  urls.splice(index, 1);

  return response.status(204).send();
});

export default urlsRouter;
