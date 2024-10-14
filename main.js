let persona = {
    nome: 'Carlo',
    cognome: 'Magno',
    età: 50,
    saluta: function(nomeDaSalutare){
        console.log(`Ciao ${nomeDaSalutare}! Sono ${this.nome}!`);
    }
}

persona.saluta('Anna');
