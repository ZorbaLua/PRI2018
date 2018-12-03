var express = require('express');
var router = express.Router();
var Users = require('../../controllers/user')


router.get('/', function(req, res) {
    Users.listar()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).send('Erro na listagem: ' + erro))
});

router.get('/:id', function(req, res) {
    User.consultar(req.params.id)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).send('Erro na consulta: ' + erro))
});


router.post('/', function(req, res) {
    Users.inserir(req.body)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).send('Erro na listagem: ' + erro))
});

module.exports = router;