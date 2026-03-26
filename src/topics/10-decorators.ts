
function classDecorator<T extends{new (...args: any[]): {}}>(
    constructor: any
) {
    return class extends constructor {
        myProperty = 'New Property';
        hello = 'override';
    }
}




//@classDecorator
export class SuperClass {

    public myProperty: string = 'Abc123';

    print() {
        console.log('Hola Mundo - 10-decorators.ts:20')
    }
}

console.log(SuperClass)

const myClass = new SuperClass();
console.log( myClass)
