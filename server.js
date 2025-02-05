const express = require('express');

const app = express();

app.listen(3000, () => {
    console.log('Listening on port 3000')

})

app.get('/', (req, res) => {
    res.send(`Home Page`);
})

// app.get('/:greetings/:name', (req, res) => {
//     res.send(`${req.params.greetings}, ${req.params.name}`);
//     console.log(req.params.greetings);
// });

app.get('/roll/:number', (req, res) => {
    const number = req.params.number;

    // Check if the number parameter is undefined or an empty string
  if (isNaN(number)) {
        res.send('You must specify a valid number');
    } else {
        res.send(`You rolled a ${Math.floor(Math.random()*Number(number)+1)}`);
    }
});

