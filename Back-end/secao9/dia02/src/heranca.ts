class Superclass {
    public isSuper: boolean;

    constructor() {
        this.isSuper = true;
    }

    public sayHello() {
        console.log('Olá Mundo!');
    }
}

class Subclass extends Superclass {
    // public isSuper: boolean;

    constructor() {
        super()
        this.isSuper = false;
    }
}

const myFunc = (object: Superclass) => {
    // if (object.isSuper === true) {
    //     console.log('Super!');
        
    // }
    // if (object.isSuper === false) {
    //     console.log('Sub!');
    // }
    console.log(object.isSuper ? 'Super!' : 'Sub!');
    
}

const obj1 = new Superclass();
const obj2 = new Subclass();

myFunc(obj1)
myFunc(obj2)