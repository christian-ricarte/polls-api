import { FastifyInstance } from "fastify";
import { prisma } from "../../lib/prisma";

export async function getPolls(app: FastifyInstance) {
    app.get("/polls", async (request, reply) => {
        const polls = await prisma.poll.findMany()
        
        return reply.send(polls)
    })
}