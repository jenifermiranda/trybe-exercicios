abstract class Character {
    abstract talk(): void;
    // abstract specialMove(): void;
    
    // Crie um método estático que receba como parâmetro character: Character e, dentro dele, chame os métodos talk e specialMove para apresentar o personagem.

    static characterPresentation(character: Character) {
        character.talk();
        character.specialMove();
    }
}

class MeleeCharacter extends Character {
    constructor(private _name: string, private _specialMoveName: string) {
        super();
    }
    talk(): void {
        console.log(`Eu sou o ${this._name}`);
    }
    specialMove(): void {
        console.log(`${this._name} faz o movimento ${this._specialMoveName}`);
    }
}

class LongRangeCharacter extends Character {
    constructor(private _name: string, private _specialMoveName: string) {
        super();
    }
    talk(): void {
        console.log(`Eu sou o ${this._name}`);
    }
    specialMove(): void {
        console.log(`${this._name} faz o movimento ${this._specialMoveName}`);
    }
}

const yoshi = new MeleeCharacter('Yoshi', 'come inimigos');
const samus = new LongRangeCharacter('Samus', 'cospe fogo');

// yoshi.talk();
// yoshi.specialMove();
// samus.talk();
// samus.specialMove();

// ao invés de acionarmos os métodos talk e specialMove individualmente a partir das instâncias, acione-os por meio do método estático criado no exercício anterior.

Character.characterPresentation(yoshi);
Character.characterPresentation(samus);