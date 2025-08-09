var personName = "John";
var age = 25;
var isStudent = true;
// Special Types
var notSure = 4;
notSure = "maybe a string";
notSure = false;
// Array Types
var numbers = [1, 2, 3, 4, 5];
var strings = ["hello", "world"];
// Tuple
var tuple = ["age", 25];
// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var myColor = Color.Green;
// Void and Null
var unusable = undefined;
var nullValue = null;
