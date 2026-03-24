import { Person } from './08-Clases';

export class Person {
    //public name: string;
    //public address: string;

    constructor(
        public name: string, 
        private address: string
    ) {}
}  

//export class Hero extends Person {
    //constructor(
        //public alterEgo: string,
        //public age: number,
       // public realName: string
    //) {
        //super(realName, 'New York');
    //}
//}

export class Hero extends Person {
    public get realName(): string {
        return this._realName;
    }
    public set realName(value: string) {
        this._realName = value;
    }
    public person: Person;

    constructor(
        public alterEgo: string,
        public age: number,
        private _realName: string,
        public person: Person
    ) {

    }
}

const tony = new Person('Tony Stark', 'New York');
const ironman = new Hero('Ironman', 45, 'Tony Stark', tony);


console.log(ironman);
