
export class Person {
    public name: string;
    public address: string;

    constructor(
        public name: string, public address?: string = "No address") {
            this.name = name;
            this.address = address;
    }
}  

const ironman = new Person('Ironman', 'New York');


console.log(ironman);
