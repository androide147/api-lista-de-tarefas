const express = require('express');

const app = express();

app.use(express.json()); 

let tarefas = [];
let idCounter = 1;


// ROTA POST: 
app.post('/tarefas', (req, res) => {
    const { descricao, status } = req.body;

    if (!descricao) {
        return res.status(400).json({ erro: 'A descrição da tarefa é obrigatória.' });
    }

    const novaTarefa = {
        id: idCounter++,
        descricao: descricao,
        status: status || 'pendente'
    };

    tarefas.push(novaTarefa);
    res.status(201).json(novaTarefa); 
});

// ROTA GET: 
app.get('/tarefas', (req, res) => {
    res.status(200).json(tarefas);
});

// ROTA PUT: 
app.put('/tarefas/:id', (req, res) => {
    const { id } = req.params;
    const { descricao, status } = req.body;

    const tarefa = tarefas.find(t => t.id == parseInt(id));

    // Se a tarefa não for encontrada, retorna um erro
    if (!tarefa) {
        return res.status(404).json({ erro: 'Tarefa não encontrada.' });
    }

    if (descricao) tarefa.descricao = descricao;
    if (status) tarefa.status = status;

    res.status(200).json(tarefa);
});

// ROTA DELETE: 
app.delete('/tarefas/:id', (req, res) => {
    const { id } = req.params;
    const index = tarefas.findIndex(t => t.id == parseInt(id));

    // Se a tarefa não for encontrada, retorna um erro
    if (index === -1) {
        return res.status(404).json({ erro: 'Tarefa não encontrada.' });
    }

    tarefas.splice(index, 1); // Remove a tarefa do array
    res.status(204).send(); 
});

// 5. Iniciar o servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});