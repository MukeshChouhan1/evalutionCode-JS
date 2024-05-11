## Closure

- Function alongwith its lexical scope bundled together forms a closure.
  example
  function x(){
  var a =7;
  function y(){
  console.log(a)
  }
  return y;
  }

/ we cannot access argument keyword in arrow function.
// cannot use to create constructor functions.
// does not have this binding.

// const arr [1,2,3];
// work of function is declaration exectuion and die
// Array.prototype.mymap for all array's.

// call
-- changes the value of this.

const kitchen = {
name: "kitchen",
purpose: "cook",
order: "meal",

    cookFood() {
      console.log(`Serving ${this.order} in 2 mins`);
    },

};

const bedroom = {
name: "bedroom",
purpose: "sleep",
order: "magiee",

};

kitchen.cookFood.call(bedroom);
