import { Router } from 'express';
import URL from '../models/URL';
import UrlsRepository from '../repositories/UrlsRepository';

const urlsRouter = Router();

const urlsRepository = new UrlsRepository();
const urls: URL[] = [];

urlsRouter.post('/', (request, response) => {
  const { address, description } = request.body;

  const url = urlsRepository.create(address, description);

  if (!url) {
    return response.status(400).json({ error: 'URL already exists.' });
  }

  return response.status(201).json(url);
});

urlsRouter.get('/', (request, response) => {
  const allUrls = urlsRepository.all();

  return response.json(allUrls);
});

urlsRouter.get('/:id', (request, response) => {
  const { id } = request.params;

  const url = urlsRepository.findById(id);

  if (!url) {
    return response.status(400).json({ error: 'URL not found.' });
  }

  return response.status(200).json(url);
});

urlsRouter.put('/:id', (request, response) => {
  const { id } = request.params;
  const { address, description } = request.body;

  const urlFoundIndex = urls.findIndex(url => url.id === id);

  if (urlFoundIndex < 0) {
    return response.status(400).json({ error: 'URL not found.' });
  }

  const url = {
    id,
    address,
    description,
  };

  urls[urlFoundIndex] = url;

  return response.status(200).json(url);
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
