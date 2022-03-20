class CampoInvalido extends Error {
    constructor (campo) {
        const mensagem = `0 camp0 '${campo}' está inválido!`
        super(mensagem)
        this.name = 'CampoInvalido'
        this.idErro = 1 
    }
}

module.exports = CampoInvalido