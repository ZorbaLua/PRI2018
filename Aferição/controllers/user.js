var User = require('../models/user')

// Lista de eventos

module.exports.listar = () => {
    return User
        .find()
        .exec()
}

module.exports.inserir = user => {
    return User.create(user)
}

