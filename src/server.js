// servidor nodejs => express
const express = require("express");
const routes = require("./routes");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(routes);

// catch all errors
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({ error: error.message });
});

app.listen(PORT, () => {
  console.log(`Rodando na porta => http://localhost:${PORT}`);
});
