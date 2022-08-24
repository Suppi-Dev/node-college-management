// function divide(a, b) {
//     return new Promise(function (resolve, reject) {
//         if (b === 0) {
//             reject('You cannot divide bt 0!');
//             return;
//         }
//         resolve(a / b);
//     });
// }

// divide(10, 2).then(function (result) {
//     console.log('Divison success: ${result}');
// }).catch(function (error) {
//     console.log('There was an error with the division!');
//     console.log(error)
// });


var p1 = new Promise(function (x, y) {
    var res = false;
    if (res) { x("It is true"); }
    else { y("It is false"); }
})
console.log(p1);
p1.then(function (val) { console.log(val); })
    .catch(function (val) { console.log(val); })