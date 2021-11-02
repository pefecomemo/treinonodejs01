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
        return nome;
    }

    getProfissao() {
        return profissao;
    }

    getVida() {
        return vida;
    }

    getMana() {
        return mana;
    }

    getDext() {
        return dext;
    }

    getAtq() {
        return atq;
    }

    getDef() {
        return def;
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



}