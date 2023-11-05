// let id: number = 143;
// console.log("ID: ", id);

// basic
let id: number = 1;
let company: string = "doodle";
let isOk: boolean = true;
let x: any = "jaMonChayTa";

// array
let ids: number[] = [1, 2, 3];
let names: string[] = ["ovi", "mondal", "keo nah"];
let sottoNaMitta: boolean[] = [true, false];
let arr: any[] = ["ovi", 143, null];

// tuple
let person: [string, number, boolean] = ["ovi", 26, false];

// tuple array
let employees: [string, number, boolean][];
employees = [
  ["ovi", 26, false],
  ["fahim", 24, true],
];

// unions
let pid: string | number;
pid = "string";
pid = 123;

// enum
enum Direction {
  Up = 3,
  Right,
  Down,
  Left,
}
console.log(Direction.Left);
enum Direction1 {
  Up = "Up",
  Right = "Right",
  Down = "Down",
  Left = "Left",
}
console.log(Direction1.Left);
