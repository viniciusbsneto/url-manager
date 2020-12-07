import { Router } from 'express';

import UsersRepository from '../repositories/UsersRepository';
import CreateUserService from '../services/CreateUserService';
import DeleteUserService from '../services/DeleteUserService';
import UpdateUserService from '../services/UpdateUserService';

const usersRouter = Router();
const usersRepository = new UsersRepository();

usersRouter.post('/', (request, response) => {
  try {
    const { name, email, password } = request.body;

    const createUserService = new CreateUserService(usersRepository);

    const user = createUserService.execute({ name, email, password });

    return response.status(201).json(user);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

usersRouter.get('/', (request, response) => {
  const allUsers = usersRepository.all();

  return response.status(200).json(allUsers);
});

usersRouter.get('/:id', (request, response) => {
  try {
    const { id } = request.params;

    const user = usersRepository.findById(id);

    if (!user) {
      throw new Error('User not found.');
    }

    return response.status(200).json(user);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

usersRouter.put('/:id', (request, response) => {
  try {
    const { id } = request.params;
    const { name, email } = request.body;

    const updateUserService = new UpdateUserService(usersRepository);

    const user = updateUserService.execute(id, { name, email });

    return response.status(200).json(user);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

usersRouter.delete('/:id', (request, response) => {
  try {
    const { id } = request.params;

    const deleteUserService = new DeleteUserService(usersRepository);

    deleteUserService.execute(id);

    return response.status(204).send();
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default usersRouter;
