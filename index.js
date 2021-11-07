const Individuo = require("./Individuo");

const ind1 = new Individuo(
    "pedro", //nome
    "arqueiro", //profissão
    100, //vida
    100, //mana
    150, //dext
    100, //atq
    80 //def
);
const ind2 = new Individuo("fuller", "mago", 70, 150, 100, 150, 100);
const ind3 = new Individuo("stacer", "paladin", 200, 50, 80, 150, 100);
const ind4 = new Individuo("sui serui", "thief", 60, 90, 200, 100, 80);

//calculo do crit:
//dext1 > dext2
//atq + (atq +25%)

console.log(ind1.nome, ind1.somaPts());
console.log(ind2.somaPts());
console.log(ind3.somaPts());
console.log(ind4.somaPts());

console.log(ind1.ataque(ind1, ind2));