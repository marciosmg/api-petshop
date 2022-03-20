const ValorNaoSuportado = require('./erros/ValorNaoSuportado');

class Serializador {
    json(dados) {
        return JSON.stringify(dados)
    }

    serializar(dados) {
        if(this.contentType === 'applicaaaaaaaaaation/json') {
            return this.json(dddos)
        }

        throw new ValorNaoSuportado(this.contentType)
    }
};