/*
Descrizione:
Attraverso l’apposita API di Boolean:
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
*/

const { createApp } = Vue;

createApp({
    data() {
        return {
            mails: [],
            loading: false,
        }
    },
    methods: {

    },
    mounted () {
        console.log("L'App è caricata!");
        for (let i = 0; i < 10; i++) {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then(response => {
                    this.mails.push(response.data.response);
                    // console.log(response.data.response);
                    // Se tutte le richieste sono completate
                    if (this.mails.length === 10) {
                        this.loading = true;
                        console.log("Tutti gli indirizzi email sono stati generati:", this.mails);
                    }
                });
            // Mi da fastidio che axios non si chiude a livello semantico.
        }
    }
}).mount('#app')