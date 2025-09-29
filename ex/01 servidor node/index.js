const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send('Bem-vindo!');
});

app.get("/sobre", (req, res) => {
    res.send('Bem-vindo a pagina sobre a empresa!');
});

const produtos = ['Notebook', 'Mouse', 'Teclado'];

app.get("/produtos", (req, res) => {
    let html = '<h1>Lista de Produtos</h1>';
    html += '<ul>';
    for (let produto of produtos) {
        html += `<li>${produto}</li>`;
    }
    html += '</ul>';
    res.send(html);
});

app.get('/produtos/:id', (req, res) => {
    const id = req.params.id;
    const produtoSel = produtos[id]

    if (produtoSel == undefined) {
        res.send(`Produto não encontrado`)
    } else {
        res.send(`Você está visualizando o Produto do id ${id} - o produto é ${produtoSel}`)
    }

});

app.get(`/total/id_produto/:prc/:qntd`, (req,res) =>{
    const prc = Number(req.params.prc)
    const qntd = Number(req.params.qntd)
    const id_produto = Number(req.params.id_produto)
    
    const resultado = prc + qntd;
    res.send(`${id_produto} + ${prc} * ${qntd} = ${resultado}`)
});

app.get ('/menu', (req,res) => {
    let html = `
    <h1>Menu</h1>
    <a href = "/">Principal </a> <br>
    <a href = "/sobre">Sobre </a> <br>
    <a href = "/produtos">Produtos </a> <br>
    <a href = "/produtos/1">Produto 1</a> <br>
    <a href = "/produtos/2">Produto 2</a> <br>
    <a href = "/total/2/2000/5">Total</a> <br>
      `;
      res.send(html);
    
})

const porta = 3000;
app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
});

//-----------------------------------------------------------------------\\



