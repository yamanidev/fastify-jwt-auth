require("dotenv").config();
const fastifyPostgres = require("@fastify/postgres");

// Require the framework and instantiate it
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

// Declare a route
fastify.get("/", function handler(request, reply) {
    reply.send({ hello: "world" });
});

// Run the server!
fastify.listen({ port: 3000 }, (err) => {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
});
