function initVue() {
    var app = new Vue({
        el: '#app',

        data: {

            userIndex: 1,    // chat selezionata al caricamento
            findUser: '',    // filtro lista user
            answer: '',      // valore iniziale input della chat

            contacts: [
                {
                    name: 'Michele',
                    avatar: 'user1.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: 'user2.png',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            text: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: 'user3.png',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            text: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Luisa',
                    avatar: 'user4.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
            ]   // fine contacts
        },

        methods: {

            corrIndex(index) {      // indice corrente
                this.userIndex = index;
            },

            insertMsg(userIndex){
                let myMsg = {
                    text: this.answer,  // ciò che digito in input
                    status: 'sent'
                }
                this.contacts[userIndex].messages.push(myMsg);

                // RISPOSTA UTENTE (dopo 2 secondi)

                setTimeout (function(){

                    let userResp= {
                        text: 'ok',
                        status: 'received'
                    }
                    app.contacts[userIndex].messages.push(userResp);
                }, 2000);

                this.answer = '';   // ripulisco campo input dopo invio msg
            },
        }
    });
} // fine initVue

function init() {
    initVue();
}
document.addEventListener('DOMContentLoaded', init);