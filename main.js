// ## Objetivo:

// Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

// - nome
// - idade
// - tipo (ex: guerreiro, mago, monge, ninja )

// além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

// - exibir a mensagem: "o {tipo} atacou usando {ataque}")
// - aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
// - e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

// se mago -> no ataque exibir (usou magia)
// se guerreiro -> no ataque exibir (usou espada)
// se monge -> no ataque exibir (usou artes marciais)
// se ninja -> no ataque exibir (usou shuriken)

// ## Saída

// Ao final deve se exibir uma mensagem:

// - "o {tipo} atacou usando {ataque}"
//   ex: mago atacou usando magia
//   guerreiro atacou usando espada



class Heroi{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = this.letarmaiuscula(tipo);
    }

    letarmaiuscula(string){
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }
    
    atacar(){
        let ataque
        if(this.tipo === "Mago"){
            ataque = "magia"
            console.log(`O ${this.tipo} atacou usando ${ataque}`)
       }else if(this.tipo === "Guerreiro"){
            ataque = "Espada"
            console.log(`O ${this.tipo} atacou usando ${ataque}`)
       }else if(this.tipo === "Monge"){
            ataque = "Artes marciais"
            console.log(`O ${this.tipo} atacou usando ${ataque}`)
       }else if(this.tipo === "Ninja"){
            ataque = "Shuriken"
            console.log(`O ${this.tipo} atacou usando ${ataque}`)
       }else{
        console.log("Heroi Inexistente")
       }
    }
}

let exibir = new Heroi("Lucas", 23, "mago")

exibir.atacar()

