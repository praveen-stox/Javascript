console.log("this is about loops");
let i = 0;
for (i = 0; i < 3; i++) {
    console.log(i);
}

let names = ["praveen", "dhoni", "virat"];
for (let index = 0; index < names.length; index++) {
    console.log(names[index]);
}

names.forEach(function f(element) {
    console.log(element);
});

for (element of names) {
    console.log(element);
}

let employee = {
        name: "king",
        age: 37,
    }
    //for iterating over objects in javascript.
for (key in employee) {
    console.log(`the ${key} of employee is ${employee[key]}`);
}

let j = 7;
while (j >= 0) {
    console.log(j);
    j--;
}

let k = 5;
do {
    console.log(k);
    k--;
} while (k > 0);