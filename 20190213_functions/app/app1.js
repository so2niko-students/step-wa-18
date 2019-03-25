//объявление функции ДЕКЛАРАТИВНЫЙ
function /*имя функции*/sum2Num(/*аргументы функции*/){
	//тело функции начало
	let nums = prompt('Enter 2 numbers with space between them'),
		numArr = nums.split(" "),
		sum = 0, 
		answ = "Ошибка. Пожалуйста, введите 2 числа через пробел";

	if(checkNums(numArr, 444, false, true, 1, 'Tor')){
		sum = parseFloat(numArr[0]) + parseFloat(numArr[1]);
		answ = "Сумма двух чисел равна " + sum;	
	}
	
	alert(answ);
	//тело функции конец
}


//Вызов функции
sum2Num();

//фукнция для проверки ввода чисел пользователем
function checkNums(arr, el){										//аргумент функции
	console.log(arguments);
	
	if(!Array.isArray(arr) || arr.length < 2){	//проверка на получение массива длиной 2 и больше
		return false;
	}
	
	for(let i = 0; i < arr.length; i++){
		if(isNaN(parseFloat(arr[i]))){							//элемент массива не число
			return false;
		}
	}
	
	
	return true;				//Если все проверки пройдены - занчит массив подходит под условия
}
let gg = 0,
	lala;

//......................
//Функциональный стиль
if(gg > 0){
   lala = function(){
		alert('hello');
   	}
}else{
	lala = function(){
		alert('bb');
	}
}
//lala();

console.log(sum);
