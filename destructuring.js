let a, b;
[a, b] = [3, 4]
console.log(a, b);

[a, b, c, ...d] = [1, 1, 4, 5, 5, 6, 7, 2, 23, 5, 5, 4, 5, 6, 6, 6, 7, 8, 9]
console.log(a);
console.log(b);
console.log(c);
console.log(d);


({ a, b, c, ...d } = { a: 20, b: 600, c: 40, d: 500, e: 600 })
console.log(a, b, c, d);


const laptop = {
    model: "HP ",
    age: "23 days",
    gender: "male",
    net: 1234,
    start: function () { console.log('started'); }

};
laptop.model;
const { model, age, gender, net, start } = laptop
console.log(model, age, gender, net, start);
start()
