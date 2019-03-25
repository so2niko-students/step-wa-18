let arr1 = [],
    obj1 = {};

arr1[0] = 'Hello';
obj1['0'] = 'Hello';
obj1.name = 'Иван';
obj1['address'] = "Днепр";
obj1.arr = arr1;
// arr1.push(obj1);
obj1['my records'] = ['Nirvana', 'Rvana', 'Porvana', 'Rano'];

console.log(arr1);
console.log(obj1);
console.log(obj1['0']);