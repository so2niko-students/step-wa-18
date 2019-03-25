let dd0 = {
        d_name: "Маша",
        hello : function(n){
            console.log("Привет, " + n + ", меня зовут " + this.d_name);
            return "Приветствие произведено успешно";
        }
    },
    arr0 = ["Петя", "Катя", 43],
    str0 = "Вандерфелл";

console.log(dd0);
console.log(arr0);
console.dir(new String("Вася"));

dd0.hello();
// console.log(dd0.hello());
