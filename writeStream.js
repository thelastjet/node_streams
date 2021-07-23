const fs = require("fs");
const fetch = require('isomorphic-fetch');


fetch("http://deckofcardsapi.com/api/deck/new")
    .then((res) => res.json())
    .then((data) => {
        const writeStream = fs.createWriteStream("./cards.json");
        data.drawUrl = "http://deckofcardsapi.com/deck" + data.deck_id + "/draw/?count=2";
         writeStream.write(JSON.stringify(data))
    })
    .catch((err) => console.error(err));