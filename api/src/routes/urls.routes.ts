import { Router } from 'express';

import UrlsRepository from '../repositories/UrlsRepository';
import CreateUrlService from '../services/CreateUrlService';
import DeleteUrlService from '../services/DeleteUrlService';
import UpdateUrlService from '../services/UpdateUrlService';

const urlsRouter = Router();
const urlsRepository = new UrlsRepository();

urlsRouter.post('/', (request, response) => {
  try {
    const { address, description } = request.body;

    const createUrlService = new CreateUrlService(urlsRepository);

    const url = createUrlService.execute({ address, description });

    return response.status(201).json(url);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

urlsRouter.get('/', (request, response) => {
  const allUrls = urlsRepository.all();

  return response.status(200).json(allUrls);
});

urlsRouter.get('/:id', (request, response) => {
  try {
    const { id } = request.params;

    const url = urlsRepository.findById(id);

    if (!url) {
      throw new Error('URL not found.');
    }

    return response.status(200).json(url);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

urlsRouter.put('/:id', (request, response) => {
  try {
    const { id } = request.params;
    const { address, description } = request.body;

    const updateUrlService = new UpdateUrlService(urlsRepository);

    const url = updateUrlService.execute(id, { address, description });

    return response.status(200).json(url);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

urlsRouter.delete('/:id', (request, response) => {
  try {
    const { id } = request.params;

    const deleteUrlService = new DeleteUrlService(urlsRepository);

    deleteUrlService.execute(id);

    return response.status(204).send();
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default urlsRouter;
