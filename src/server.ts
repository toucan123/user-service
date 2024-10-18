import Fastify from 'fastify';
import { routes } from './routes';

const PORT = 3131;

const app = Fastify();
app.register(routes);

async function start() {
  app.ready();
  app.listen({ port: PORT, host: '0.0.0.0' });
  console.log(`listening on ${PORT}`);
};

start();

