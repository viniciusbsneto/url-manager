import 'dotenv/config';

import express from 'express';
import cors from 'cors';

import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

const port = process.env.APP_PORT || 3333;

app.listen(port, () => {
  console.log('Server started on port 3333!');
});
