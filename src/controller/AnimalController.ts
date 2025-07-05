import express from "express";
import { AuthProxy } from "../proxy/AuthProxy";

export const animalRouter = express.Router();

animalRouter.post("/cadastrar", AuthProxy.autenticar, (req, res) => {
  // lógica para cadastrar animal
  res.status(201).json({ mensagem: "Animal cadastrado com sucesso" });
});
