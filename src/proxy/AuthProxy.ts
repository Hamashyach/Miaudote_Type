import { Request, Response, NextFunction } from "express";

// Proxy que intercepta a requisição e valida o token
export class AuthProxy {
  static autenticar(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization;

    if (token === "Bearer token123") {
      // Simula um token válido (em produção, seria JWT ou session)
      next();
    } else {
      res.status(401).json({ erro: "Acesso não autorizado" });
    }
  }
}
