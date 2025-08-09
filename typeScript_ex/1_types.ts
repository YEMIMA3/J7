let personName: string = "John";
let age: number = 25;
let isStudent: boolean = true;

// Special Types
let notSure: any = 4;
notSure = "maybe a string";
notSure = false;

// Array Types
let numbers: number[] = [1, 2, 3, 4, 5];
let strings: Array<string> = ["hello", "world"];

// Tuple
let tuple: [string, number] = ["age", 25];

// Enum
enum Color {
    Red,
    Green,
    Blue
}
let myColor: Color = Color.Green;

// Void and Null
let unusable: void = undefined;
let nullValue: null = null;