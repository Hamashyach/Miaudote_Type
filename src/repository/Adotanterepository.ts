import { connection } from "../database/mysql";
import { Usuario } from "../model/Usuario";

export class UsuarioRepository {
  async salvar(usuario: Usuario): Promise<void> {
    const sql = "INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)";
    await connection.execute(sql, [usuario.nome, usuario.email, usuario.senha]);
  }

  async buscarPorEmail(email: string): Promise<Usuario | null> {
    const sql = "SELECT * FROM usuarios WHERE email = ?";
    const [rows]: any = await connection.execute(sql, [email]);

    if (rows.length === 0) return null;

    const row = rows[0];
    return new Usuario(row.id, row.nome, row.email, row.senha);
  }
}