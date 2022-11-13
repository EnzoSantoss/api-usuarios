const express = require("express");
const app = express();
const conn = require("./db/conn");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const routes = require("./routes/mainRoutes");

app.use("/", routes);

conn
  .sync()
  .then(() => {
    console.log("Servidor ouvindo a porta 3000");
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
