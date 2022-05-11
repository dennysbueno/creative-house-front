//Usei o express para criar e configurar o meu servidor
const express = require('express')
const server = express()

const axios = require('axios')
const url = "http://localhost:3333"

//configurar arquivos estáticos (css, scripts, imgs)
server.use(express.static("public")) // Procure colocar barras antes do style.css, script.js, imagens e etc

// Habilitando o req.body
server.use(express.urlencoded({ extended: true }))

//configuração do nunjcks
const nunjucks = require('nunjucks')
nunjucks.configure("public/Views", {
   express: server, 
   noCache: true, // vai guardar algumas coisas que ele julga importante
})

server.get('/', function(req, res) {

   axios.get(`${url}/ideas`)
   .then(response => {
      
      let allIdeas = response.data

      let lastIdeas = []

      for (let idea of allIdeas) {
         if(lastIdeas.length < 2) {
            lastIdeas.push(idea)
         }
      }
      
      return res.render('index.html', { ideas: lastIdeas }) 
   })
   .catch(error => console.error(error))
})

server.get('/ideas', function(req, res) { // Dois paramêtros, requisição e resposta
   
   axios.get(`${url}/ideas`)
   .then(response => {
   let allIdeas = response.data
   
   return res.render('ideias.html', {ideas: allIdeas}) // Dirname

   })
   .catch(error => console.error(error))   

})

server.post("/", function(req, res){
   console.log(req.body);
   axios.post(`${url}/ideas`, {
      title: req.body.title,
      category: req.body.category,
      link_image: req.body.image,
      description: req.body.description,
      link_idea: req.body.link
   })
     .then(res => {
        console.log('estou aqui', res.data)
     })
     .catch(error => console.error(error.message))
     res.redirect("/ideas")
})

server.listen(3001)
