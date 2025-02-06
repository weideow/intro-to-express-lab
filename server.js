const express = require('express');

const app = express();

app.listen(3000, () => {
    console.log('Listening on port 3000')

})

app.get('/', (req, res) => {
    res.send(`Home Page`);
})

app.get('/:greetings/:name', (req, res) => {
    res.send(`${req.params.greetings}, ${req.params.name}`);
    console.log(req.params.greetings);
});

app.get('/roll/:number', (req, res) => {
    const number = req.params.number;

    // Check if the number parameter is undefined or an empty string
  if (isNaN(number)) {
        res.send('You must specify a valid number');
    } else {
        res.send(`You rolled a ${Math.floor(Math.random()*Number(number)+1)}`);
    }
});

app.get('/collectibles/:number', (req, res) => {

    const collectibles = [
        { name: 'shiny ball', price: 5.95 },
        { name: 'autographed picture of a dog', price: 10 },
        { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
      ];
    
    const index = Number(req.params.number);
   
    if (isNaN(index)) {
        res.send('This item is not yet in stock. Check back soon!');
    }

    else  {
        const collectible = collectibles[index]
        res.send(`So you want the ${collectible.name}? For ${collectible.price}, it can be yours!`);
    }

});

// localhost:3000/shoes?type=sneaker&min-price=50&max-price=500

app.get('/shoes', (req, res) => {
    const shoes = [
        { name: "Birkenstocks", price: 50, type: "sandal" },
        { name: "Air Jordans", price: 500, type: "sneaker" },
        { name: "Air Mahomeses", price: 501, type: "sneaker" },
        { name: "Utility Boots", price: 20, type: "boot" },
        { name: "Velcro Sandals", price: 15, type: "sandal" },
        { name: "Jet Boots", price: 1000, type: "boot" },
        { name: "Fifty-Inch Heels", price: 175, type: "heel" }
    ];
  
    const type = req.query.type
    const maxPrice = req.query.
        if ()
        res.send()
});
