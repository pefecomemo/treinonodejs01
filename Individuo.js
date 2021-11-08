module.exports = class Individuo {

    constructor(nome, profissao, vida, mana, dext, atq, def) {
        this.nome = nome;
        this.profissao = profissao;
        this.vida = vida;
        this.mana = mana;
        this.dext = dext;
        this.atq = atq;
        this.def = def;
        this.dataCriacao = new Date();
    }


    getNome() {
        return this.nome;
    }

    getProfissao() {
        return this.profissao;
    }

    getVida() {
        return this.vida;
    }

    getMana() {
        return this.mana;
    }

    getDext() {
        return this.dext;
    }

    getAtq() {
        return this.atq;
    }

    getDef() {
        return this.def;
    }

    setNome(nome) {
        this.nome = nome;
    }

    setProfissao(profissao) {
        this.profissao = profissao;
    }

    setVida(vida) {
        this.vida = vida;
    }

    setMana(mana) {
        this.mana = mana;
    }

    setDext(dext) {
        this.dext = dext;
    }

    setAtq(atq) {
        this.atq = atq;
    }

    setDef(def) {
        this.def = def;
    }

    somaPts() {
        return (this.vida + this.mana + this.dext + this.atq + this.def);
    }





    atacar(atacante, defensor) {
        atacante = (typeof atacante !== "object") ? {} : atacante;
        defensor = (typeof defensor !== "object") ? {} : defensor;

        if (atacante.dext > defensor.dext) {

            var critico = (atacante.atq + (atacante.atq * 0.25));
        } else {

            var critico = atacante.atq;
        }

        var resultado = critico - defensor.def;

        if (resultado <= 0) {
            return "ataque ineficaz";
        } else
            return "ataque causou " + resultado + "pts";
    }


}