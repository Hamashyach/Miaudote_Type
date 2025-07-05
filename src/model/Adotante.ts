export class Adotante{
    public readonly id?: string;
    public nome: string;
    public email: string;
    public telefone: string;
    public endereco: string;
    public cpf: string; 

    constructor(nome: string, email: string, telefone: string, endereco: string, cpf: string, id?: string) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.endereco = endereco;
        this.cpf = cpf;
    }
}