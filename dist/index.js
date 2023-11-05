"use strict";
// let id: number = 143;
// console.log("ID: ", id);
// basic
let id = 1;
let company = "doodle";
let isOk = true;
let x = "jaMonChayTa";
// array
let ids = [1, 2, 3];
let names = ["ovi", "mondal", "keo nah"];
let sottoNaMitta = [true, false];
let arr = ["ovi", 143, null];
// tuple
let person = ["ovi", 26, false];
// tuple array
let employees;
employees = [
    ["ovi", 26, false],
    ["fahim", 24, true],
];
// unions
let pid;
pid = "string";
pid = 123;
// enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 3] = "Up";
    Direction[Direction["Right"] = 4] = "Right";
    Direction[Direction["Down"] = 5] = "Down";
    Direction[Direction["Left"] = 6] = "Left";
})(Direction || (Direction = {}));
console.log(Direction.Left);
var Direction1;
(function (Direction1) {
    Direction1["Up"] = "Up";
    Direction1["Right"] = "Right";
    Direction1["Down"] = "Down";
    Direction1["Left"] = "Left";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Left);
