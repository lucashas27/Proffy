import express from 'express';

const app = express();

app.use(express.json()) // configurando o express pra entender JSON


// GET: Buscar ou listar alguma informação
// POST: Criar alguma nova informação
// PUT: Atualizar uma informação existente
// DELETE: Deletar uma informação existente

// Corpo (Request Body): Dados para criação ou atualização de um registro
// Route Params: Identificar qual recurso eu quero atualizar ou deletar
// Query Params: Paginação, filtros, ordenação




app.post('/', (request, response) => {



    return response.json( { message: "Hello world"})
})




app.listen(3333);