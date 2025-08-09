function add(x: number, y: number): number {
    return x + y;
}

function printPerson(person: { name: string; age: number }): void {
    console.log(`${person.name} is ${person.age} years old`);
}

type MathOperation = (x: number, y: number) => number;
let multiplyNumbers: MathOperation = (x, y) => x * y;

interface SearchFunc {
    (source: string, subString: string): boolean;
}