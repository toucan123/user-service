import { FastifyInstance } from 'fastify';

export const routes = async (fastifyInstance: FastifyInstance) => {
  fastifyInstance.get('/hi', async (req, res) => {
    res.send({ message: 'Hello' });
  });
}