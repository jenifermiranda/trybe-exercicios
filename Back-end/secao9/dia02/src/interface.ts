interface MyInterface {
    myNumber: number;

    myFuncc(myParam: number): string;
}

class MyClass implements MyInterface {

    constructor(public myNumber: number) { }

    public myFuncc(myParam: number): string {
        return `${myParam + this.myNumber}`
    }
}

const obj3 = new MyClass(2)

console.log(obj3.myFuncc(2));

