class Clientes {
    // atributos 
    private _nome: string;

    // constructor 
    constructor (nome: string) {
        this._nome = nome;
    }

    public get nome(): string {
        return this._nome;
    }
    public set nome(value: string) {
        this._nome = value;
    }

    // metodos
}

class Pedido {
    // atributos 
    private _cliente: string;
    private _itensPedidos: Item[];
    private _metodoPag: string;
    private _desconto?: number[] | undefined;

    // constructor 
    constructor (cliente: string, itensPedidos: Item[], metodoPag: string) {
        this._cliente = cliente;
        this._itensPedidos = itensPedidos;
        this._metodoPag = metodoPag;
    }

    public get cliente(): string {
        return this._cliente;
    }
    public set cliente(value: string) {
        this._cliente = value;
    }

    public get itensPedidos(): Item[] {
        return this._itensPedidos;
    }
    public set itensPedidos(value: Item[]) {
        this._itensPedidos = value;
    }

    public get metodoPag(): string {
        return this._metodoPag;
    }
    public set metodoPag(value: string) {
        this._metodoPag = value;
    }

    public get desconto(): number[] | undefined {
        return this._desconto;
    }
    public set desconto(value: number[] | undefined) {
        this._desconto = value;
    }
    // metodos
    valorPedido(): number {
        this.itensPedidos[preco]
    }

}
class Item {
    // atributos 
    private _nomeItem: string;
    private _preco: number;

    // constructor 
    constructor (nomeItem: string, preco: number) {
        this._nomeItem = nomeItem;
        this._preco = preco;
    }

    public get nomeItem(): string {
        return this._nomeItem;
    }
    public set nomeItem(value: string) {
        this._nomeItem = value;
    }

    public get preco(): number {
        return this._preco;
    }
    public set preco(value: number) {
        this._preco = value;
    }
    // metodos
}

const pedidos = new Pedido('Maple', [new Item('batata', 10), new Item('refri', 5)], 'dinheiro');

console.log(pedidos);
