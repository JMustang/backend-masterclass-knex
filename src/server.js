// servidor nodejs => express
const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Holla!");
});
app.listen(PORT, () => {
  console.log(`Rodando na porta => http://localhost:${PORT}`);
});
