import express from "express";
import bodyParser from "body-parser";
import { router } from "./controller/AdocaoController";

const app = express();
app.use(bodyParser.json());

app.use("/adocao", router);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});