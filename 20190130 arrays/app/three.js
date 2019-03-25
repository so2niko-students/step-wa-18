let a = 5,
    b = 10;

a = b;

a++;

console.log('Копирование по значению');
console.log("b: " + b);//10
console.log("a: " + a);//10

//----------------------------------------------------

let ar0 = ['Динамо', "Ворскла", "Днепр"],
    ar1 = ['ЦСК', "Зенит", "Спартак"];

// ar0 = ar1;

// ar0[0] = 'Арсенал';

console.log('Копирование по ссылке');
console.log(ar1);

// ar0.splice(1,1);//1 атр - с какого; 2 атр - сколько удалять
// ar0.splice(1, 0, "Манчестер Юнайтед", "Динамо Киев");
console.log(ar1);

let months = [1, 2, 3, [4, "Апрель", "Квiтень"], 5, 6, 7, 8, 9, 10, 11, 12];

months[3].splice(1, 0, "April");
console.log(months);
ar0.sort().reverse();
// ar0.fill('Сталь');
console.log(ar0);
