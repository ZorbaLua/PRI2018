var express = require('express');
var router = express.Router();
var axios = require('axios')
var passport = require('passport')


/* GET users listing. */
router.get('/', function(req, res, next) {
  axios.get('http://localhost:3000/api/users')
  .then(users => res.render('indexUser',{users: users.data}))
  .catch(erro => {
      console.log('No utilizador: ' + erro)
      res.render('error', {error: erro, message: "No utilizador"})
  })
});

router.get('/novo', function(req, res, next) {
  axios.get('http://localhost:3000/api/users')
  .then(users => res.render('register',{user: users.data}))
  .catch(erro => {
      console.log('Erro na criacao de um user: ' + erro)
      res.render('error', {error: erro, message: "Na criacao de utilizador"})
  })
});


router.post('/', function(req, res) {
  axios.post('http://localhost:3000/api/users', req.body)
  .then(()=> res.redirect('http://localhost:3000/users'))
  .catch(erro => {
      console.log('Erro na inserção do evento: ' + erro)
      res.render('error', {error: erro, message: "Meu erro AGORA"})
  })
});
  



router.get('/login', function(req, res) {
  axios.get('http://localhost:3000/api/users')
      .then(users => res.render('login'))
      .catch(erro => {
          console.log('Erro no login: ' + erro)
          res.render('error', {error: erro, message: "Meu erro Login"})
      })
});

router.post('/login', passport.authenticate('local', { successRedirect: '/authrequired',
        failureRedirect: '/login',
        failureFlash: 'Utilizador ou password inválio(s)...',
        successFlash: 'Utilizador autenticado com sucesso.'}
))

/* router.get('/authrequired', (req,res) => {
  if(req.isAuthenticated()){
    res.send('Atingiste a área autenticada!')
  }
  else{
    res.redirect('/')
  }
}) */

// Proteger com middleware
function verificaAutenticacao(req, res, next){
  if(req.isAuthenticated()) next()
  else res.redirect("/login")
}

router.get('/protegida', verificaAutenticacao, (req,res) => {
  res.send('Atingiste a área protegida!!!')
})

module.exports = router;
