const express = require("express");
const app = express();



app.get("/", (req, res) => {
    res.send('Bem-vindo ao servidor Node.js com Express!');
});

app.get("/sobre", (req, res) => {
    res.send('Bem-vindo a pagina sobre a empresa!');
});

const usuarios = [' joao', 'maria', 'pedro', 'mauro'];

app.get("/usuarios", (req, res) => {
    let html = '<h1>Lista de usuarios</h1>';
    html += '<ul>';
    for (let usuario of usuarios) {
        html += `<li>${usuario}</li>`;
    }
    html += '</ul>';
    res.send(html);
});

app.get('/usuarios/:id', (req, res) => {
    const id = req.params.id;
    const usuarioSel = usuarios[id]

    if (usuarioSel == undefined) {
        res.send(`Usuário não encontrado`)
    } else {
        res.send(`Você está visualizando o perfil do id ${id} - seu nome é ${usuarioSel}`)
    }

});

app.get(`/soma/:n1/:n2`, (req,res) =>{
    const n1 = Number(req.params.n1)
    const n2 = Number(req.params.n2)
    const resultado = n1 + n2;
    res.send(`${n1} + ${n2} = ${resultado}`)
});

app.get ('/menu', (req,res) => {
    let html = `
    <h1>Menu</h1>
    <a href = "/">Principal </a> <br>
    <a href = "/sobre">Sobre </a> <br>
    <a href = "/usuarios">Usuarios </a> <br>
    <a href = "/usuarios/1">Usuarios 1</a> <br>
    <a href = "/usuarios/2">Usuarios 2</a> <br>
    <a href = "/usuarios/3">Usuarios 3</a> <br>
    <a href = "/soma/20/48.5">Soma</a> <br>
      `;
      res.send(html);
    
})

const port = 3000;
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

//-----------------------------------------------------------------------\\



