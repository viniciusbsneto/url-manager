import { Router } from 'express';
import { uuid } from 'uuidv4';

interface URL {
  id: string;
  address: string;
  description: string;
}

const urlsRouter = Router();

const urls: URL[] = [];

urlsRouter.post('/', (request, response) => {
  const { address, description } = request.body;

  const url = {
    id: uuid(),
    address,
    description,
  };

  urls.push(url);

  return response.json(url);
});

export default urlsRouter;
