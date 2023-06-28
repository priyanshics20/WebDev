function typeConversion() {
    let num = document.getElementById("userinput").value;
    console.log(+num, typeof +num); //type conversion string to number
}

let x;
let y;
let z;

x = String(3.14);
console.log(x, typeof x);

y = Boolean('');
console.log(y, typeof y);

//Basic operators , Maths
// console.log('this is first string' + ' this is second string');
// console.log('6' / 2);

// let n = 2;
// console.log(++n);
// console.log(n);
// console.log(n++);
// console.log(n);
//assignment operator return the value

// n += 2;
// n *= 2;
// console.log(n);

// console.log(3 && 4);
// console.log(2 || 3);
// console.log(!true);
// console.log('tree' > 'trie');

// if (ture) alert('true');

// let age = prompt('enter your age', ' ');
// if (age > 18) {
//     alert('you are eligible');
// }
// else {
//     alert('not eligible');
// }

//ternart operator
// condition ? value1 : value2 ;

// let i = 0;
// while (i < 3) {
//     alert(i);
//     i++;
// }
//same for for loop


let sum = 0;
while (true) {
    let c = prompt('enter a number');
    if (+c != 0) {
        sum += +c;
    }
    else {
        alert(sum);
        break;
    }
}