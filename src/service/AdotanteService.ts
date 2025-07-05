import { UsuarioRepository } from "../repository/UsuarioRepository";
import { Usuario } from "../model/Usuario";
import { UsuarioDTO } from "../dto/UsuarioDTO";

export class UsuarioService {
  constructor(private usuarioRepo = new UsuarioRepository()) {}

  async cadastrar(dto: UsuarioDTO): Promise<void> {
    const existente = await this.usuarioRepo.buscarPorEmail(dto.email);
    if (existente) {
      throw new Error("Email já cadastrado");
    }

    const usuario = new Usuario(0, dto.nome, dto.email, dto.senha);
    await this.usuarioRepo.salvar(usuario);
  }

  async autenticar(email: string, senha: string): Promise<Usuario> {
    const usuario = await this.usuarioRepo.buscarPorEmail(email);
    if (!usuario || usuario.senha !== senha) {
      throw new Error("Credenciais inválidas");
    }
    return usuario;
  }
}