export interface Passanger {
    name: string;
    children?: string[];
    
}

const passanger1: Passanger = {
    name: 'Santi'
}

const passanger2: Passanger = {
    name: 'Vale',
    children: ['Angel', 'Alma'] 
}

const printChildres = (passanger: Passanger) => {

    const howManyChildren = passanger.children?.length || 0;

    console.log(howManyChildren);
}

printChildres(passanger1);
printChildres(passanger2);
