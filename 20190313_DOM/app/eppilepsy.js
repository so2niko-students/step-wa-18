function randColor(domBall){
    let dogsUrl = [
            'https://cdn.theatlantic.com/assets/media/img/mt/2018/11/shutterstock_552503470/lead_720_405.jpg',
            'https://www.cesarsway.com/sites/newcesarsway/files/styles/large_article_preview/public/Common-dog-behaviors-explained.jpg',
            'https://thenypost.files.wordpress.com/2018/05/180516-woman-mauled-by-angry-wiener-dogs-feature.jpg',
            'https://www.sciencenews.org/sites/default/files/2018/08/main/articles/082918_lh_crispr-beagles_feat_REV.jpg'
            ],
        domP = document.querySelector('p');


    counter = (counter + 1) % dogsUrl.length;
    document.body.style.backgroundImage = 'url(' + dogsUrl[counter] + ')';
    

    // if(counter % 2){
    //     domP.classList.remove('blue');
    //     domP.classList.add('red');
    // }else{
    //     domP.classList.remove('red');
    //     domP.classList.add('blue');
    // }

    domP.classList.toggle('blue');
    domP.classList.toggle('red');
   
}

function randColorBall(domBall){
    let colStr = '0123456789abcdef',
    color = "#";

    for(let i = 0; i < 6; i++){
        color += colStr[Math.floor(Math.random() * colStr.length)];
    }

    domBall.style.backgroundColor = color;
    domBall.style.top = Math.floor(Math.random() * 800) + 'px';
    domBall.style.left = Math.floor(Math.random() * 1000) + 'px';
}

function createBall(){
    let ball = document.createElement('div');

    ball.classList.add('ball');
    randColorBall(ball);

    document.body.appendChild(ball);
}


let counter = 0;
// setInterval(randColor, 1000);
setInterval(createBall, 1000);



