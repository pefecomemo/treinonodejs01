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


    danoCritico(defensor) {
        defensor = (typeof defensor !== "object") ? {} : defensor;
        if (this.dext > defensor.dext) {
            let dano = (this.atq + (this.atq * 0.25));
            return dano;
        } else {
            let dano = this.atq;
            return dano;
        }
    }

    ataque(defensor) {
        defensor = (typeof defensor !== "object") ? {} : defensor;

        var dc = danoCritico();
        let ataque = dc - defensor.def;
        if (ataque <= 0) {
            return "ataque ineficaz";
        } else
            return "ataque causou " + ataque + "pts";
    }

}