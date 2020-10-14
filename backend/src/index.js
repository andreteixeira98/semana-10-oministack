const express =  require('express');

const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();
mongoose.connect('mongodb+srv://oministack:goweek10@cluster0-fudtp.mongodb.net/goweek10?retryWrites=true&w=majority', {
    useNewUrlParser: true ,
    useUnifiedTopology: true,
});
app.use(express.json());//colocar antes das rotas
app.use(routes);

// metodos http get, post, put, delete

//tipos de parametos
//query params: request.query (filtros, ordenacao, paginação , ...)
//routes params: request.params (identificar um recurso na alteracao (PUT) ou remocao(DELETE))
//body request.body (dados para criacao ou alteracao)

//mongoDB  (NAO-relacional)
app.listen(3333);

