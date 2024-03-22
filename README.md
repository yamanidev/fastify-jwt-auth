## About
Simple JWT authentication implemented using Fastify as a web server and PostgreSQL as a database.

## Running locally
- Copy the environment variables example file `cp .example.env .env` and change the configuration accordingly.
- Pull the PostgreSQL image, build it and run the container : `docker compose up`

### To do
- [x] Set up the database using `docker-compose` with an init SQL script.
- [x] Set up the environment variables.
- [x] Set up a style formatter (probably prettier).
- [ ] Set up a linter.
- [ ] Set up basic Fastify server.
- [ ] Set up the database connection.
- [ ] Implement `/sign-up` route.
- [ ] Implement `/sign-in` route.
- [ ] Project structuring.
- [ ] Add TypeScript.
