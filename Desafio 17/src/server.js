const express = require("express");

const app = express();

app.get("/message/:id/:user", (request, response) => {
  response.send(`Id da Mensagem: ${request.params.id}`);
});

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));