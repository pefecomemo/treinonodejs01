const Individuo = require("./Individuo");

const ind1 = new Individuo("pedro", "arqueiro", 100, 100, 150, 150, 80);
const ind2 = new Individuo("fuller", "mago", 70, 150, 100, 150, 80);
const ind3 = new Individuo("stacer", "paladin", 200, 50, 80, 150, 100);
const ind4 = new Individuo("sui serui", "thief", 60, 90, 200, 100, 80);


console.log(ind1.somaPts());
console.log(ind2.somaPts());
console.log(ind3.somaPts());
console.log(ind4.somaPts());