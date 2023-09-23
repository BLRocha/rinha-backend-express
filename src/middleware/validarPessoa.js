const { createClient } = require('redis')

const dataInvalida = (dataString) => (isNaN(new Date(String(dataString)).getTime()))
const rejeitarTipos = (param) => /\d|null|false|true|undefined/.test(param);

const cache = createClient({
    socket:{
        host: 'redis',
        posrt: 0x18EB,
        tls: false
}})

cache.connect()

const validarPessoa = async (req, res, next) => {
    const { apelido, nome, nascimento, stack } = req.body

    if (await cache.get(`${apelido}`))
        return res.status(422).json()

    if ( rejeitarTipos(apelido) || apelido.length > 0x20 )
        return res.status(422).json()

    if ( typeof stack === typeof '' || typeof stack == typeof 0x3 )
        return res.status(422).json()

    if ( rejeitarTipos(nome) || nome.length > 0x64 )
        return res.status(422).json()

    if ( nascimento?.length != 0xA || dataInvalida(nascimento) )
        return res.status(422).json();
    await cache.set(`${apelido}`, 1, { EX: 300 })
    if (stack == null || stack.every( stkItem => (stkItem.length < 0x21 && !rejeitarTipos(stkItem)))) {
        next()
    } else {
        return res.status(422).json()
    }
}

module.exports = validarPessoa