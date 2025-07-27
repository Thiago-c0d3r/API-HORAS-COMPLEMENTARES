CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL
);

CREATE TABLE HorasComplementares (
    id SERIAL PRIMARY KEY,
    atividade VARCHAR(255) NOT NULL,
    horas INTEGER NOT NULL,
    status VARCHAR(50) DEFAULT 'pendente'
);