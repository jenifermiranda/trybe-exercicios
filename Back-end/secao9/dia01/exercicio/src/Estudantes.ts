class Estudantes {
    // atributos
   private _matricula: string;
   private _nome: string;
   private _notasProva: number[] = [];
   private _notasTrabalho: number[] = [];


    // constructor
    constructor (matricula: string, nome: string, notasProva: number[], notasTrabalho: number[]) {
        this._matricula = matricula;
        this._nome = nome;
        this.notasProva = notasProva;
        this.notasTrabalho = notasTrabalho;
    }

    // metodos
    public get matricula(): string {
        return this._matricula;
    }
    public set matricula(value: string) {
        this._matricula = value;
    }

    public get nome(): string {
        return this._nome;
    }
    public set nome(value: string) {
        this._nome = value;
    }

    public get notasProva(): number[] {
        return this._notasProva;
    }
    public set notasProva(value: number[]) {
        if (!value || value.length !== 4) {
            throw new Error('Notas insuficientes');
        }
        this._notasProva = value;
    }

    public get notasTrabalho(): number[] {
        return this._notasTrabalho;
    }
    public set notasTrabalho(value: number[]) {
        if (!value || value.length !== 2) {
            throw new Error('Notas insuficientes');
        }
        this._notasTrabalho = value;
    }

    somaNotas(): number {
        return [...this.notasProva, ...this.notasTrabalho].reduce((notaAnterior, nota) => {
            nota += notaAnterior;
            return nota;
        }, 0);
    }
    mediaNotas(): number {
        const somaNotas = this.somaNotas();
        const notas = [...this.notasProva, ...this.notasTrabalho].length
        return somaNotas / notas;
    }
};

const estudante = new Estudantes('122331', 'gabis', [6, 6, 6, 6], [6, 6]);
const soma = estudante.somaNotas();
const media = estudante.mediaNotas();

console.log(media);
