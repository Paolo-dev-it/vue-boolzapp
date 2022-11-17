var app = new Vue({
  el: "#root",
  data: {
    contacts: [
      {
        name: "Michele",
        avatar: "_1.jpg",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            message: "Hai portato a spasso il cane?",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50:00",
            message: "Ricordati di stendere i panni",
            status: "sent",
          },
          {
            date: "10/01/2020 16:15:22",
            message: "Tutto fatto!",
            status: "received",
          },
        ],
      },
      {
        name: "Fabio",
        avatar: "_2.jpg",
        visible: true,
        messages: [
          {
            date: "20/03/2020 16:30:00",
            message: "Ciao come stai?",
            status: "sent",
          },
          {
            date: "20/03/2020 16:30:55",
            message: "Bene grazie! Stasera ci vediamo?",
            status: "received",
          },
          {
            date: "20/03/2020 16:35:00",
            message: "Mi piacerebbe ma devo andare a fare la spesa.",
            status: "sent",
          },
        ],
      },
      {
        name: "Samuele",
        avatar: "_3.jpg",
        visible: true,
        messages: [
          {
            date: "28/03/2020 10:10:40",
            message: "La Marianna va in campagna",
            status: "received",
          },
          {
            date: "28/03/2020 10:20:10",
            message: "Sicuro di non aver sbagliato chat?",
            status: "sent",
          },
          {
            date: "28/03/2020 16:15:22",
            message: "Ah scusa!",
            status: "received",
          },
        ],
      },
      {
        name: "Alessandro B.",
        avatar: "_4.jpg",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            message: "Lo sai che ha aperto una nuova pizzeria?",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50:00",
            message: "Si, ma preferirei andare al cinema",
            status: "received",
          },
        ],
      },
      {
        name: "Alessandro L.",
        avatar: "_5.jpg",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            message: "Ricordati di chiamare la nonna",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50:00",
            message: "Va bene, stasera la sento",
            status: "received",
          },
        ],
      },
      {
        name: "Claudia",
        avatar: "_6.jpg",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            message: "Ciao Claudia, hai novità?",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50:00",
            message: "Non ancora",
            status: "received",
          },
          {
            date: "10/01/2020 15:51:00",
            message: "Nessuna nuova, buona nuova",
            status: "sent",
          },
        ],
      },
      {
        name: "Federico",
        avatar: "_7.jpg",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            message: "Fai gli auguri a Martina che è il suo compleanno!",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50:00",
            message: "Grazie per avermelo ricordato, le scrivo subito!",
            status: "received",
          },
        ],
      },
      {
        name: "Davide",
        avatar: "_8.jpg",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            message: "Ciao, andiamo a mangiare la pizza stasera?",
            status: "received",
          },
          {
            date: "10/01/2020 15:50:00",
            message: "No, l'ho già mangiata ieri, ordiniamo sushi!",
            status: "sent",
          },
          {
            date: "10/01/2020 15:51:00",
            message: "OK!!",
            status: "received",
          },
        ],
      },
    ],
    currentUser: 0,
    text: "",
    pcText: "",
    nameSearch: "",
  },

  //Funzione che mi permette di selezionare i vari utenti dalla chat

  methods: {
    userSelect(index) {
      this.index = this.currentUser = index;
    },

    //Funzione che mi permette di scrivere un messaggio

    newMessage() {
      if (this.text == "") {
      } else {
        let messageOfContact = this.contacts[this.currentUser].messages;
        const d = new Date();
        let time = d.toLocaleTimeString();
        let date = d.toLocaleTimeString();

        let now = `${date} ${time}`;
        messageOfContact.push({
          date: now,
          message: this.text,
          status: "sent",
        });
        setTimeout(this.PcMessage, 1000);
      }

      this.text = "";
    },

    //Funzione che crea il messaggio automatico del pc ogni 1 secondo

    PcMessage() {
      let messageOfContact = this.contacts[this.currentUser].messages;
      const d = new Date();
      let time = d.toLocaleTimeString();
      let date = d.toLocaleTimeString();

      let now = `${date} ${time}`;

      messageOfContact.push({
        date: now,
        message: "Ok",
        status: "received",
      });
    },

    //Funzione che filtra i nomi in base alle lettere che inseriamo

    searchName() {
      this.contacts.forEach((element, index) => {
        if (this.nameSearch == "") {
          this.contacts[index].visible = true;
        } else {
          if (
            element.name.includes(this.nameSearch) ||
            element.name.toLowerCase().includes(this.nameSearch) ||
            element.name.toUpperCase().includes(this.nameSearch)
          ) {
            element.visible = true;
          } else {
            element.visible = false;
          }
        }
      });
    },

    //Funzioni che danno l'ora in tempo reale

    getLastHourContact(name) {
      let lastDate = name.messages[name.messages.length - 1].date;
      lastDate = lastDate.split(" ");
      lastDate = lastDate.slice(0, 5);
      return lastDate[1];
    },

    getLastHourMessage(element) {
      let date = element.date;
      date = date.split(" ");

      return date[1];
    },

    actualTime() {
      let today = new Date();
      var time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      time = time.slice(0, 5);
      return time;
    },
  },
});

//var now = dayjs().format("H:mm");
