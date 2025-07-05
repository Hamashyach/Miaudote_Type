export class Animal {
    public readonly id?: string; 
    public nome: string;
    public especie: string; 
    public raca: string;
    public idade: number; 
    public sexo: string; 
    public descricao: string;
    public disponivelParaAdocao: boolean;

    constructor(nome: string, especie: string, raca: string,idade: number, sexo: string, descricao: string, disponivelParaAdocao: boolean = true, id?: string ) 
    {
        this.id = id;
        this.nome = nome;
        this.especie = especie;
        this.raca = raca;
        this.idade = idade;
        this.sexo = sexo;
        this.descricao = descricao;
        this.disponivelParaAdocao = disponivelParaAdocao;
    }

    public marcarComoAdotado(): void {
        if (!this.disponivelParaAdocao) {
            throw new Error("Animal já foi adotado.");
        }
        this.disponivelParaAdocao = false;
    }

    public marcarComoDisponivel(): void {
        this.disponivelParaAdocao = true;
    }

}