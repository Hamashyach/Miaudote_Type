import { connection } from "./mysql";

async function testarConexao() {
  try {
    const [rows] = await connection.execute("SELECT 1 + 1 AS resultado");
    console.log("Conexão bem-sucedida com o banco de dados:", rows);
  } catch (error) {
    console.error("Erro ao conectar ao banco de dados:", error);
  }
}

testarConexao();