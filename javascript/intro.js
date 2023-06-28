// function first() {
//     console.log('first');
// }
// function second() {
//     console.log('second');
// }
// function third() {
//     console.log('third');
// }

// first();
// second();
// third();

// alert("hello world");
// [1, 2].forEach(alert);

// let age = 25;
// age = 40;
// console.log(age);

// let $=25;
// console.log($);

// let _=25;
// console.log(_);

// const name = 'priyanshi',
//     age = 32,
//     lecture = 'gla';

// age = 55; const variable can't be re-initialized
// console.log(age);

//DataTypes - Number , BigInt (used when range is grater than +-2^(53)-1 ), String , Boolean , Null , Undefined , object , Symbol ;
//object annd symbol are
//

// let x = 'abc';
// alert(`my name is ${x} .`);
// alert(`I am 19 yr old`);

// alert(NaN ** 0);

// let num = NaN;
// console.log(num, typeof num);

// let isGreater = -4 > 1;
// alert(isGreater);

// let y;
// console.log(y, typeof y);
//undefined means humne bas deckare kia hai usme kuch pass nahi kia

// let z = null;
// console.log(z, typeof z);
// null hum initialize krte hai toh type iska object hai


// let a = prompt('How old are you', 25);
// alert(`you are ${a} years old`);


// let isGreater = confirm('is 4 greater than 1');
// alert(isGreater);

// document.write('this is a statement');

// let a = '31';
// console.log(typeof a);
// a += 1;
// alert(a);

// let a = '31';
// console.log(typeof a);
// a = Number(a);
// a += 1;
// alert(a);


//date - 12 oct 2022 ----------------------------------------------------------------------------

// let message2 = " I'm 30 years old";
// function abc(a, b) {
//     let message = "My name is ";
//     console.log(message +a + b+ message2);
// }

// abc('john', ' doe');
// console.log(message2);

// function sum(a, b) {
//     return a + b;
// }
// console.log(sum());


// sayHi();
// let sayHi = function () {
//     console.log("hello world")
// }
// sayHi();
// let sum = sayHi;
// console.log(sum);

// arrow function

// let sum = (a, b)=>a + b;
// console.log(sum(6, 5));

//Numbers
// let num = 1000000;
// let n = 10_00_000;
// console.log(num);
// console.log(n);
// let no = 1e5;
// console.log(no)
// let no = 1e-5;
// console.log(no);
// let num = 255;
// console.log(num.toString(16)); //conrvet to hex code
// console.log(num.toString(2));  //convert to binary
 
// let num2 = 12.47756;
// console.log(Math.round(num2 * 100) / 100);
// console.log(num2.toFixed(3));

// console.log(parseInt('100px'));
// console.log(parseFloat('12.45em'));

//String
// let str = 'this is a string and is an example';
// for (i = 0; i < str.length - 1;i++) {
//     if (str.charAt(i)=='i' && str.charAt(i+1)=='s') {
//         //console.log(i);
//         alert('found at '+ i);
//     }
// }



// date - 13 oct 2022 ------------------------------------------------------------------------------

// Arrays--

// let arr = new Array(5);
// console.log(arr);

// let arr2 = [1, 2, 3,4,5,6, 'apples', 'mangoes', true, function () { alert('hello world') }];
// console.log(arr2);
// console.log(arr2[1]);
// // console.log(arr2[9]()); //calling  a function
// console.log(arr2.pop());
// console.log(arr2.push(10, 23, 45)); //can push any number of elements at a time
// console.log(arr2);
// console.log(arr2.shift());  //remove fist element i.e remove 0th index element
// console.log(arr2);
// console.log(arr2.unshift('23', 67));  //add elements at 0th index or add at starting
// console.log(arr2);

// console.log([2] == [2]);

// let ar1 = [1, 2, 3];
// let ar2 = ar1;
// console.log(ar1 == ar2);

// let array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// let sum = 0;
// let arr = [array.length * array[0].length];
// let idx = 0;
// console.log(array[1][1]);
// for (i = 0; i < array.length; i++){
//     for (j = 0; j < array[i].length; j++){
//         console.log('row - ' + i + ', col - ' + j);
//         sum += array[i][j];
//         arr[idx++] = array[i][j];
//     }
// }
// console.log('sum = '+ sum);
// console.log(arr);


// let arr = ['mango', 'apple', 'banana', 'orange'];
// console.log(arr.splice(0, 2));
// delete arr[2];
// arr.splice(2, 0, 'grapes');
// console.log(arr);

// arr.forEach(alert);

// let str = "This is a dev class ";
// let s = str.split(" ").map(word => word.split("").reverse().join(""));
// console.log(s.join(" "));

// let s = str.split(" ");
// let ans = "";
// for (i = 0; i < s.length; i++){
//     for (j = s[i].length - 1; j >= 0; j--){
//         ans += s[i][j];
//     }
//     ans += " ";
// }
// console.log(ans);

// let str = 'background-color-red';
// let s = str.split("-");
// let ans = "";
// for (i = 0; i < s.length; i++){
//     for (j = 0; j < s[i].length; j++){
//         if (s[i][0]==true)
//             ans += s[i][0].toUpperCase();
//         else
//             ans += s[i][j];
//     }
// }
// console.log(ans);

//date - 19 oct 2022 -----------------------------------------------------------------------------
// let obj = {
//     name: 'john',
//     1: "a", 2: "b", 3: "c", "helo": 121, welcome: function () {
//         console.log("welocme");
//     },
//     arr1: ['maruti', 'swift', 'baleno'],
//     'new car': 'audi',
// };

// console.log(obj.arr1);
// console.log(obj.name);

// obj['isAdult'] = true;
// console.log(obj);

// console.log(obj.arr1[2]);
// console.log(obj);
// console.log(obj["welcome"]);
// console.log(obj[1]);
// console.log(obj["helo"]);
// console.log(Object.keys(obj));
// console.log(Object.values(obj));

// let str = "aabc bbca caab ddac";
// let obj = {};
// for (let i of str){
//     if (!obj[i])
//         obj[i] = 1;
//     else
//         obj[i] = obj[i] + 1;
// }
// console.log(obj);

// delete obj[" "];
// console.log(obj);

//GARBAGE COLLECTION
// 1. GLobal Variables
// 2. functions still to execute

// let person = {
//     name: 'john',
//     age: 24,
// };

// person = null;
// console.log(person);

// Prototypes
// it is a mechanism through whuch objects can inherit property of one another

// let person = {
//     name: 'john',
//     age: 24,
// };

// let p1 = Object.create(person);
//or

// let p1 = {
//     lastname: 'doe',
//     __proto__: person,  //two time underscore then proto then again two time underscore
// };
// console.log(p1);

// p1['name'] = 'harry';
// console.log(p1.name);
// console.log(p1.age);

// let p2 = {
//     isAdult: true,
//     __proto__: p1,
// };

// console.log(p2.lastname);
// console.log(p2.name);

// console.log(p2.__proto__ === p1);
// console.log(person.__proto__ === Object.prototype);

// date - 20 oct 2022--------------------------------------------------------------------------------

// Callbacks -  recursion is a subset of callback
//when a function is called from another function , then it is called callback

// function print(val) {
//     console.log(val);
// }

// function add(n1, n2, print) {
//     let sum = n1 + n2;
//     print(sum);
// }

// add(2, 3, print); //callback function

// const fs = require("fs");

// function callback(err, data) {
//     if (!err) {
//         console.log(data);
//     }
// }

// fs.readFile('password.html', 'utf-8', callback);  //readfile

// Date - 10 nov 2022

//Querying Documnet
// let header = document.getElementById('header-title');

// header.style.backgroundColor = 'red';


//1 dec 2022
//polyfill

// function newpolyfill(arr, cb) {
    
// }

// function cb() {
    
// }
// const arr = [1,2,3,4,5,6,7,8,9]
// let fArray = arr.filter((x) => x % 2 == 0);
// console.log(fArray);
