const myImg = {
    isCatch : false,
    dom     : null,
    cssClass: 'cathImg',
    minSize : 10,
    minMove : 10,
    px      : 'px'
}

//Захват изображения
function imgCatch(ev){
    if(ev.target.hasAttribute('src') && ev.target.tagName == 'IMG'){
        //очистка стиля прошлого объекта
        img2Freedom();
        //захват нового
        myImg.dom = ev.target;
        myImg.isCatch = true;
        myImg.dom.classList.add(myImg.cssClass);
    }

}

//Отмена захвата
function img2Freedom(){
    if(myImg.isCatch){
        myImg.dom.classList.remove(myImg.cssClass);
        myImg.dom = null;
        myImg.isCatch = false;
    }
    
}

//Движение изображения
function moves(direction){
    if(myImg.isCatch == false){
        return 0;
    }
    
    let left    = isNaN(parseInt(myImg.dom.style.left))? 0 : parseInt(myImg.dom.style.left),
        top     = isNaN(parseInt(myImg.dom.style.top))? 0 : parseInt(myImg.dom.style.top);
    
    switch(direction){
        case 'up':{
            myImg.dom.style.top = (top - myImg.minMove) + myImg.px;     
            break;
        }
        case 'down':{
            myImg.dom.style.top = (top + myImg.minMove) + myImg.px;   
            break;
        }
        case 'left':{
            myImg.dom.style.left = (left - myImg.minMove) + myImg.px;     
            break;
        }
        case 'right':{
            myImg.dom.style.left = (left + myImg.minMove) + myImg.px;  
            break;
        }
            
    }
}

//Изменение размера
function resize(action){
    if(myImg.isCatch == false){
        return 0;
    }

    let width   = myImg.dom.width,
        height  = myImg.dom.height,
        zIndex  = isNaN(parseInt(myImg.dom.style.zIndex))? 0 : parseInt(myImg.dom.style.zIndex);
    
    
    
    console.log(width);
    console.log(height);
    console.log(zIndex);
    
    switch(action){
        case 'up':{
            myImg.dom.style.zIndex = zIndex + 1;
            break;
        }
        case 'down':{
            myImg.dom.style.zIndex = zIndex - 1;
            break;
        }
        case 'smaller':{
            myImg.dom.style.width = width - myImg.minSize + myImg.px;
            break;
        }
        case 'bigger':{
            myImg.dom.style.width = width + myImg.minSize + myImg.px;
            break;
        }
    }
}

//Маршрутизатор нажатий пользователя
function keyRouter(ev){
    console.log('нажали' + ev.keyCode);
    console.log(ev);
    if(myImg.isCatch){//есть ли картинка в фокусе
        if(ev.ctrlKey){//изменение размера или z-index
            switch(ev.keyCode){
                case 38:{//движение вверх
                    resize('up');
                    break;
                }
                case 40:{//движение вниз
                    resize('down');
                    break;
                }
                case 37:{//движение влево
                    resize('smaller');
                    break;
                }
                case 39:{//движение вправо
                    resize('bigger');
                    break;
                }
            }
        }else{
            //Перемещения        
            switch(ev.keyCode){
                case 27:{//отмена
                    img2Freedom();
                    break;
                }
                case 38:{//движение вверх
                    moves('up');
                    break;
                }
                case 40:{//движение вниз
                    moves('down');
                    break;
                }
                case 37:{//движение влево
                    moves('left');
                    break;
                }
                case 39:{//движение вправо
                    moves('right');
                    break;
                }
            }
        }
    }
}


document.querySelector('main').addEventListener('click', imgCatch);
document.body.addEventListener('keydown', keyRouter);

