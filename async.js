async function Hello() {
    return await "Hello...";

}
Hello().then(x => { console.log(x); })


function calc(a, b) {
    return new Promise(function (x, y) {
        setTimeout(function () {
            x(a + b);
        }, 2000)
    })

}
Add().then(x => { console.log(x); });
// const Add = async function () {
//     return await calc(2, 5);

// }

Add().then(x => { console.log(x); });

// calc(2, 10).then(x => { console.log(x); return x + 1 })
//     .then(y => { console.log(y); return y + 2 })
//     .then(z => { console.log(z); }
