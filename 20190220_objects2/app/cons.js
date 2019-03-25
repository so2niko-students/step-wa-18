function likeADragon(n){
    this.name = n;
    this.age = Math.floor(Math.random() * 2000);
    this.heads = Math.floor(Math.random()*10 + 1);
    this.hello = function(){
        console.log("Привет, человек, меня зовут " + this.name + ". И мне " + this.age + " лет.");
    }
    this.addOneHead = function(){
        this.heads++;
        console.log("Количество голов увеличено. Теперь " + this.heads);
    }

    this.cheshuaGenerator = function(){
        let colors = ['green', 'black', 'red', 'yellow', 'white', 'silver'];
        return colors[Math.floor(Math.random()*colors.length)];
    }

    this.cheshua = this.cheshuaGenerator();
}

let dragons = [];

for(let i = 0; i < 1000; i++){
    dragons.push(new likeADragon('Дракон#' + i));
}

console.info(dragons);