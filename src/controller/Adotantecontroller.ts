import express from "express";
import { UsuarioService } from "../service/UsuarioService";

export const router = express.Router();
const service = new UsuarioService();

router.post("/registrar", async (req, res) => {
  try {
    await service.cadastrar(req.body);
    res.status(201).json({ mensagem: "Usuário cadastrado" });
  } catch (err: any) {
    res.status(400).json({ erro: err.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const usuario = await service.autenticar(req.body.email, req.body.senha);
    res.status(200).json({ mensagem: "Login bem-sucedido", usuario });
  } catch (err: any) {
    res.status(401).json({ erro: err.message });
  }
});