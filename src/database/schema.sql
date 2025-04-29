CREATE TABLE publishers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

INSERT INTO publishers (name) VALUES
    ('Marvel Comics'),
    ('DC Comics');

CREATE TABLE heros (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    publisher_id INTEGER REFERENCES publishers(id) ON DELETE SET NULL
);

INSERT INTO heros (name, publisher_id) VALUES
    ('Pantera Negra', 1),
    ('Homem-Aranha', 1),
    ('Viúva Negra', 1),
    ('Deadpool', 1),
    ('Batman', 2),
    ('Super Choque', 2),
    ('Flash', 2),
    ('Cyborg', 2);