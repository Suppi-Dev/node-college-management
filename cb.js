function fetchData(cb) {
    setTimeout(() => {
        let data = { pCode: 1001, pName: 'Orange' };
        cb(data);
    }, 2000)
}
console.log("Starts here");
fetchData(function (data) {
    console.log(data);
    console.log("Ends here")

});

function cSqr(n, cb) {
    setTimeout(() => {
        cb(n * n);
    })
}
cSqr(2, function (res) {
    console.log(res);
    cSqr(res, function (res1) {
        console.log(res1);
    })
})
// let res = cSqr(2);
// console.log(res);