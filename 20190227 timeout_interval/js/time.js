console.log('Я тут');
let time = 0;

function changeTime(){
    let h3 = document.querySelector('h3');

    h3.innerHTML = ++time;

    if(time == 10){
        h3.classList.add('round');
    }
    // if(time < 11){
    //     setTimeout(changeTime, 1000);
    // }
    
}
//Задержка выполнения функции
setTimeout(changeTime, 1000);

let egg = setInterval(changeTime, 1000);

function stopStop(){
    clearInterval(egg);
}

let dd = new Date();
console.log(dd);
console.log(dd.getHours());
console.log(dd.getMinutes());
console.log(dd.getSeconds());