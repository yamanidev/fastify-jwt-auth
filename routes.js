async function routes(fastify, opts) {
    fastify.get("/users", async (request, reply) => {
        const client = await fastify.pg.connect();
        const { rows } = await client.query("SELECT * FROM users");
        client.release();
        return rows;
    });
}

module.exports = routes;
