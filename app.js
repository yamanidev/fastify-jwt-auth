require("dotenv").config();
const fastifyPostgres = require("@fastify/postgres");
const routes = require("./routes");

const fastify = require("fastify")({
    logger: {
        transport: {
            target: "pino-pretty",
        },
    },
});

fastify.register(fastifyPostgres, {
    connectionString: `postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@localhost:5432/${process.env.DB_NAME}`,
});

fastify.register(routes, {
    prefix: "/api",
});

fastify.get("/", function handler(request, reply) {
    reply.send({ hello: "world" });
});

fastify.listen({ port: 3000 }, (err) => {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
});
