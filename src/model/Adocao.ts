export enum StatusAdocao {
    PENDENTE = 'PENDENTE',
    APROVADA = 'APROVADA',
    REJEITADA = 'REJEITADA',
    CONCLUIDA = 'CONCLUIDA',
    CANCELADA = 'CANCELADA'
}

export class Adocao {
    public readonly id?: string;
    public animalId: string;
    public adotanteId: string; 
    public dataSolicitacao: Date;
    public status: StatusAdocao;
    public observacoes?: string; 


    constructor(animalId: string,adotanteId: string,dataSolicitacao: Date, status: StatusAdocao = StatusAdocao.PENDENTE, observacoes?: string,id?: string
    ) {
        this.id = id;
        this.animalId = animalId;
        this.adotanteId = adotanteId;
        this.dataSolicitacao = dataSolicitacao;
        this.status = status;
        this.observacoes = observacoes;
    }

    // Métodos de domínio para alterar o status da adoção
    public aprovar(): void {
        if (this.status !== StatusAdocao.PENDENTE) {
            throw new Error(`Não é possível aprovar uma adoção com status ${this.status}.`);
        }
        this.status = StatusAdocao.APROVADA;
    }

    public rejeitar(motivo: string): void {
        if (this.status === StatusAdocao.CONCLUIDA || this.status === StatusAdocao.CANCELADA) {
            throw new Error(`Não é possível rejeitar uma adoção com status ${this.status}.`);
        }
        this.status = StatusAdocao.REJEITADA;
        this.observacoes = `Rejeitada: ${motivo}`;
    }

    public concluir(): void {
        if (this.status !== StatusAdocao.APROVADA) {
            throw new Error(`Adoção precisa ser APROVADA antes de ser CONCLUIDA.`);
        }
        this.status = StatusAdocao.CONCLUIDA;
    }

    public cancelar(motivo: string): void {
        if (this.status === StatusAdocao.CONCLUIDA) {
            throw new Error(`Não é possível cancelar uma adoção já CONCLUIDA.`);
        }
        this.status = StatusAdocao.CANCELADA;
        this.observacoes = `Cancelada: ${motivo}`;
    }
}