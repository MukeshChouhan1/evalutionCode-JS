// // // // function isitTriangle(arr) {
// // // //   let a = arr[0];
// // // //   let b = arr[1];
// // // //   let c = arr[2];

// // // //   if (a + b > c && a + c > b && b + c > a) {
// // // //     return true;
// // // //   }
// // // //   return false;
// // // // }
// // // // function runProgram(input) {
// // // //   var input = input.trim().split("\n");
// // // //   for (let i = 1; i < input.length; i++) {
// // // //     let arr = input[i].split(" ").map(Number);
// // // //       if (isitTriangle(arr)) {
// // // //           console.log("Yes")
// // // //       }
// // // //       else {
// // // //           console.log("No")
// // // //       }
// // // // }
// // // //   }

// // // // if (process.env.USERNAME === "Anurag") {
// // // //   runProgram(`4
// // // // 4 5 13
// // // // 7 1 8
// // // // 2 5 4
// // // // 2 2 2
// // // // `);
// // // // } else {
// // // //   process.stdin.resume();
// // // //   process.stdin.setEncoding("ascii");
// // // //   let read = "";
// // // //   process.stdin.on("data", function (input) {
// // // //     read += input;
// // // //   });
// // // //   process.stdin.on("end", function () {
// // // //     read = read.replace(/\n$/, "");
// // // //     read = read.replace(/\n$/, "");
// // // //     runProgram(read);
// // // //   });
// // // //   process.on("SIGINT", function () {
// // // //     read = read.replace(/\n$/, "");
// // // //     runProgram(read);
// // // //     process.exit(0);
// // // //   });
// // // // }
// // // function convert(n) {
// // //   if (n < 0) {
// // //     console.log(n);
// // //   } else {
// // //     convert(n / 2);
// // //     console.log(n % 2);
// // //   }
// // // }
// // // convert(10);
// // // console.log(arguments);

// // // function sayHi() {
// // //     console.log(name);
// // //     console.log(age)
// // // }

// // // const bird = {
// // //   size: "small",
// // // };

// // // const mouse = {
// // //   name: "mickey",
// // //   small: true,
// // // };

// // // let c = { greeting: "hey!" };
// // // let d;
// // // d = c;
// // // c.greeting = "hello";
// // // console.log(d.greeting);

// // // let a = 3;
// // // let b = new Number(3);
// // // let c = 3
// // // console.log(typeof );

// // // es6 classes ka video

// // // let greeting;
// // // greetign = {};
// // // console.log(greetign);
// // function bark() {
// //   console.log("woof!");
// // }

// // bark.animal = "dog";
// // bark();
// // // console.log(mouse[bird["size"]]);

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// const lydia = new Person("anurag", "kumar");
// const sarah = Person("sarah", "kumar");
// console.log(lydia);
// console.log(sarah); // because there is no new keyword , new keyword returns

// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(1, "2")); //cohersion, typecasting
// let number = 0;

// console.log(number++);
// console.log(++number);
// console.log(number);

// function getPersonInfo(one, two, three) {
//   console.log(one);
//   console.log(two);
//   console.log(three);
// }
// const person = "Lydia";
// const age = 21;

// getPersonInfo`${person} is ${age} years old`;



