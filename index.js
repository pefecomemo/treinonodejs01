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
const ind2 = new Individuo("fuller", "mago", 70, 150, 150, 100, 80);
const ind3 = new Individuo("stacer", "paladin", 200, 50, 80, 150, 100);
const ind4 = new Individuo("sui serui", "thief", 60, 90, 200, 100, 80);

//calculo do crit:
//dext1 > dext2
//atq + (atq +25%)

console.log("Score de " + ind1.nome + " é: " + ind1.somaPts());
console.log("Score de " + ind2.nome + " é: " + ind2.somaPts());
console.log("Score de " + ind3.nome + " é: " + ind3.somaPts());
console.log("Score de " + ind4.nome + " é: " + ind4.somaPts());

console.log(ind1.atacar(ind1, ind2));
console.log(ind2.getVida());
console.log(ind2.getMana());
console.log(ind2.getDext());
console.log(ind2.getAtq());
console.log(ind2.getDef());