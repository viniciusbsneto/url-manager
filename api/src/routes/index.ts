import { Router } from 'express';
import urlsRouter from './urls.routes';

const routes = Router();

routes.use('/urls', urlsRouter);

export default routes;
