module.exports = {
    heroes: (req, res) => {
        const fs = require('fs');
        const heroes = JSON.parse(fs.readFileSync('./data/heroes.json', 'utf-8'));
        res.send(heroes);
    },
    detalle: (req, res) => {

        const fs = require('fs');
        const heroes = JSON.parse(fs.readFileSync('./data/heroes.json', 'utf-8'));

        let id = req.params.idHeroe
        let heroe = heroes.filter((heroe) => {
            return heroe.id == id
        });

        heroeSeleccionado = heroe[0]
        if (heroeSeleccionado == undefined) {
            res.send('Este heroe no fue encontrado : (Prueve con otro numero de Id)');
        } else {
            res.send(`Hola,mi nombre es ${heroeSeleccionado.nombre} y soy ${heroeSeleccionado.profesion}`)
        }
    },
    bios: (req, res) => {
        const fs = require('fs');
        const heroes = JSON.parse(fs.readFileSync('./data/heroes.json', 'utf-8'));

        let id = req.params.id;
        let ok = req.params.ok;


        let heroe = heroes.filter((heroe) => {
            return heroe.id == id

        });
        let heroeSeleccionado = heroe[0];

        if (heroeSeleccionado == undefined) {
            res.send('no encontramos un heroe para mostrarte en su biografia');
        }
        if (ok == 'ok') {
            res.send(`${heroeSeleccionado.nombre}: ${heroeSeleccionado.resenia}`)
        } else {
            res.send(`${heroeSeleccionado.nombre}. Lamento que no desees saber nada mas de mi:`)
        }
    }
}