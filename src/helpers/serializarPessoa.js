const serializarPessoa = pessoa => {
    if (Array.isArray(pessoa)) return pessoa.map(
        pessoa => (
            {...pessoa, stack: pessoa.stack.length == 0 ? null : pessoa.stack?.split(' ')}
    ));
    return {...pessoa, stack: pessoa.stack?.length == 0 ? null : pessoa.stack?.split(' ')}
}

module.exports = serializarPessoa
