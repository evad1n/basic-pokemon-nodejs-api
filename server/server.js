var express = require('express')
var cors = require('cors')
var app = express()
app.use(cors())
var port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/pokemon', (req, res) => res.send(pokemon))

app.get('/pokemon/:id', function (req, res) {
    if (req.params.id >= 1 && req.params.id <= pokemon.length) {
        res.send(pokemon[(req.params.id) - 1])
    }
    else {
        res.send("You have entered an invalid Pokemon ID!");
    }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

var pokemon = {
    "pokemon":
        [{
            "id": 1,
            "name": "Bulbasaur",
            "type": "Grass",
            "base_experience": 64,
            "weight": 70
        },
        {
            "id": 2,
            "name": "Charmander",
            "type": "Fire",
            "base_experience": 64,
            "weight": 70
        },
        {
            "id": 3,
            "name": "Squirtle",
            "type": "Water",
            "base_experience": 64,
            "weight": 70
        },
        {
            "id": 4,
            "name": "Pikachu",
            "type": "Electric",
            "base_experience": 64,
            "weight": 70
        },
        {
            "id": 5,
            "name": "Kyogre",
            "type": "Water",
            "base_experience": 64,
            "weight": 70
        },
        {
            "id": 6,
            "name": "Metapod",
            "type": "Bug",
            "base_experience": 64,
            "weight": 70
        },
        {
            "id": 7,
            "name": "Spearow",
            "type": "Flying",
            "base_experience": 64,
            "weight": 70
        },
        {
            "id": 8,
            "name": "Hitmonchan",
            "type": "Fighting",
            "base_experience": 64,
            "weight": 70
        },
        {
            "id": 9,
            "name": "Ekans",
            "type": "Poison",
            "base_experience": 64,
            "weight": 70
        },
        {
            "id": 10,
            "name": "Dragonite",
            "type": "Dragon",
            "base_experience": 64,
            "weight": 700
        }]
}