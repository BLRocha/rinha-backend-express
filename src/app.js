const express = require('express')
const { v4 } = require('uuid')

const validarPessoa = require('./middleware/validarPessoa')
const { insertPessoa, findPessoaById, countPessoas, findPessoasByTerm } = require('./database/db')
const serializarPessoa = require('./helpers/serializarPessoa')

const app = express()

app.use(express.json())

app.post('/pessoas', validarPessoa, async (req, res) => {
    const { apelido, nome, nascimento, stack } = req.body
    const uuid = v4()
    const pessoaStack = Array.isArray(stack) ? stack.join(' ') : ''

    try {
        await insertPessoa(uuid, apelido, nome, nascimento, pessoaStack);
        res.setHeader('Location', `/pessoas/${uuid}`)
        return res.status(201).json()
    } catch (e) {
        console.log(e.message)
        return res.status(422).json()
    }
})

app.get('/pessoas/:id', async (req, res) => {
    const id = req?.params?.id
    if (id.length =! 36)
        return res.status(200).json()

    const { rows } = await findPessoaById(id)
    if (!rows[0]) return res.status(200).json()

    return res.json(serializarPessoa( rows[0] ))
})

app.get('/pessoas', async (req, res) => {
    const termo = req?.query?.t
    if (!termo) return res.status(400).json()
    if (termo.length == 0 || /\n/.test(termo)) return res.status(200).json()

    const { rows } = await findPessoasByTerm(`%${termo.toLocaleLowerCase()}%`)

    return res.json( serializarPessoa(rows) )
})

app.get('/contagem-pessoas', async (_, res) => {
    const { rows } = await countPessoas();
    return res.json(Number(rows[0]?.count))
})

module.exports = app
