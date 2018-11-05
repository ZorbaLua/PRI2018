var express = require('express')
var http = require('http')
var logger = require('morgan')
var pug = require('pug')
var fs = require('fs')
var formidable = require('formidable')
var url = require('url');


var app = express()

app.use(logger('combined'))

app.all('*', (req,res,next)=>{
    if(req.url != '/w3.css' && req.url.split("/")[1] != 'uploaded'){
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
    }
    next()
})

app.get('/', (req,res) =>{
    var data = fs.readFileSync('uploaded/desc.json')
    data = JSON.parse(data)

    res.write(pug.renderFile('form-ficheiro.pug', {ind: data}))
    res.end()
})


app.get('/uploaded/*', (req,res, next) =>{
    var file = __dirname + req.originalUrl
    console.log(file)
    console.log('\n\n')
    
    res.download(file)
})

app.get('/w3.css', (req,res) =>{
    res.writeHead(200, {'Content-Type': 'text/css'})
    fs.readFile('stylesheets/w3.css', (erro, dados) => {
        if(!erro) res.write(dados)
        else res.write(pug.renderFile('erro.pug', {e:erro}))
        res.end()
    })
})

app.post('/processaForm', (req,res) =>{
    var form = new formidable.IncomingForm()
    form.parse(req, (erro, fields, files) => {
        console.dir(fields)
        console.dir(files)

        var fenviado = files.ficheiro.path
        var fnovo = './uploaded/'+files.ficheiro.name

        fs.rename(fenviado, fnovo, erro => {
            if(!erro) {
            
                var data = fs.readFileSync('./uploaded/desc.json');
                data = JSON.parse(data); 
                data.uploads.push({
                    p:files.ficheiro.name,
                    d:fields.desc
                });
                fs.writeFile("./uploaded/desc.json", JSON.stringify(data))

                res.write(pug.renderFile('ficheiro-recebido.pug', {ficheiro: files.ficheiro.name, status: "Ficheiro recebido e guardado com sucesso."}))
                res.end()
            }
            else {
                res.write(pug.renderFile('erro.pug', {e: "Ocorreram erros na gravação do ficheiro enviado: " + erro}))
                res.end()
            }
        })
    })
})


http.createServer(app).listen(4007)
console.log('Servidor à escuta na porta 4007...')
