import { Router } from 'express';
import usersRouter from './users.routes';
import urlsRouter from './urls.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/urls', urlsRouter);

export default routes;
