-- Active: 1684267721388@@127.0.0.1@3306
CREATE TABLE mensagem (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    mensagem TEXT NOT NULL,
    created_at TEXT NOT NULL
);

SELECT * FROM mensagem;

DROP TABLE mensagem;