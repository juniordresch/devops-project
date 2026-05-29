const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Projeto DevOps</title>

      <style>
        body {
          margin: 0;
          padding: 0;
          font-family: Arial, sans-serif;
          background-color: #0f172a;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }

        .container {
          background: white;
          padding: 30px;
          border-radius: 12px;
          width: 350px;
          text-align: center;
          box-shadow: 0px 4px 15px rgba(0,0,0,0.2);
        }

        h1 {
          color: #2563eb;
          margin-bottom: 10px;
        }

        p {
          color: #555;
          margin-bottom: 20px;
        }

        input {
          width: 100%;
          padding: 10px;
          margin-bottom: 15px;
          border: 1px solid #ccc;
          border-radius: 8px;
          box-sizing: border-box;
        }

        button {
          width: 100%;
          padding: 10px;
          border: none;
          border-radius: 8px;
          background-color: #2563eb;
          color: white;
          font-size: 16px;
          cursor: pointer;
        }

        button:hover {
          background-color: #1d4ed8;
        }

        #mensagem {
          margin-top: 20px;
          color: #2563eb;
          font-weight: bold;
        }
      </style>
    </head>

    <body>
      <div class="container">
        <h1><h1>TESTE DEPLOY AZURE 123 ✔️</h1></h1>

        <p>
          CI/CD com GitHub Actions + Docker + Azure
        </p>

        <input type="text" id="nome" placeholder="Digite seu nome">

        <button onclick="enviar()">
          Enviar
        </button>

        <div id="mensagem"></div>
      </div>

      <script>
        function enviar() {
          const nome = document.getElementById('nome').value;
          const mensagem = document.getElementById('mensagem');

          if(nome.trim() === '') {
            mensagem.innerHTML = 'Digite um nome!';
          } else {
            mensagem.innerHTML = 'Olá, ' + nome + ' 👋';
          }
        }
      </script>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log('Servidor rodando na porta ' + PORT);
});