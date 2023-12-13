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
            mail: [],
        }
    },
    methods: {

    },
    mounted () {
        console.log("L'App è caricata!");
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((response) => {
                // console.log(response);
                this.mail = response.data.response;
                console.log(response.data.response);
            });
            
        
    }
}).mount('#app')