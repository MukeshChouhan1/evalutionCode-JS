// function x() {
//   var a = 5;
//   function y() {
//     console.log(a);
//   }
//   return y;
// }
// var z = x();
// // console.log(z);
// z();
function y() {
  for (var i = 1; i <= 5; i++) {
    function close(x) {
      setTimeout(function () {
        console.log(x);
      }, x * 1000);
    }
    close(i);
  }
}
y();
