var express = require('express');
var router = express.Router();
var jsonfile = require('jsonfile')
var formidable = require('formidable')
var fs = require('fs')
var url = require('url');
var logger = require('morgan')

var myBD = __dirname + "/desc.json"
console.log('BD in: ' + __dirname)


router.get('/', (req, res) => res.render('index'))

router.get('/files', (req,res) => {
  jsonfile.readFile(myBD, (erro, desc) => {
    if(!erro) res.render('lista', {lista: desc})
    else res.json(erro)
  })
})

router.post('/file/guardar', (req,res) => {
  jsonfile.readFile(myBD, (erro, files) => {

    var data = fs.readFileSync(myBD);

    data = JSON.parse(data); 
    data.uploads.push({
        d:  req.body.desc,
        p:  req.body.filename
      });

    fs.writeFile(myBD, JSON.stringify(data))
    res.end()
  })

})

module.exports = router;
