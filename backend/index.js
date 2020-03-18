const express =  require('express');

const app = express();

// metodos http get, post, put, delete

//tipos de parametos
//query params: request.query (filtros, ordenacao, paginação , ...)
//routes params: request.params (identificar um recurso na alteracao (PUT) ou remocao(DELETE))
//body

app.delete('/users/:id', (request, response) =>{
    console.log(request.params);
    return response.json({message:'hello oministack' });
});
app.listen(3333);

