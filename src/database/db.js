const { Pool } = require('pg')

const pool = new Pool({
    host: 'postgres',
    user: 'postgres',
    password: '123',
    database: 'rinha',
    max: 500,
    connectionTimeoutMillis: 10000,
});

const insertPessoa = async (id, apelido, nome, nascimento, stack) => pool.query(`INSERT INTO pessoas(
    id,
    apelido,
    nome,
    nascimento,
    stack
) VALUES ($1, $2, $3, $4, $5)`, [ id, apelido, nome, nascimento, stack ] )

const findPessoaById = async (id) => pool.query(`SELECT id, apelido, nome, nascimento, stack
    FROM pessoas WHERE id = $1
`, [id])

const findPessoasByTerm = async (termo) => pool.query(`SELECT id, apelido, nome, nascimento, stack
    FROM pessoas WHERE fullsearch ILIKE $1 LIMIT 50
`, [termo])

const countPessoas = async () => pool.query(`SELECT count(1) FROM pessoas`)

module.exports = { pool, insertPessoa, findPessoaById, findPessoasByTerm, countPessoas }
