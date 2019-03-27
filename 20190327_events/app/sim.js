document.querySelector('.in').addEventListener('keyup', function(ev){
    let colorArr;
    if(ev.ctrlKey == true && ev.key == 'Enter'){
        colorArr = ev.target.value.split(/\n/);
        document.body.style.backgroundImage = 'linear-gradient(' + colorArr.join(', ') + ')';
    }
});

function show(aaa){
    console.log(aaa.target);
    console.log('По мне кликнули');
}

document.querySelector('.in').addEventListener('click', show);
//Тип события - мышь
//Цель события - click по textarea
//ОБработчик события - function show
//Объект события -- textarea.in
//Распространение события(всплытие)


