let r = Math.floor(Math.random() * 6 + 5),
    arr0 = [];
console.log(r);

for (let index = 0; index < 10; index++) {
    arr0.push(Math.floor(Math.random() * 100 + 1));
    
}

for (let index = 0; index < arr0.length; index++) {
    console.log(index + ": " + arr0[index]);
    
}