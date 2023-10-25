CREATE DATABASE fastify_auth_jwt;

\c fastify_auth_jwt;

CREATE TABLE users(
    id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    email VARCHAR(100) UNIQUE NOT NULL,
    name VARCHAR(100) NOT NULL,
    password VARCHAR(60) NOT NULL
);
