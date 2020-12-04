const express = require('express');

const app = express();

app.listen(3030, () => console.log('Server running in 3030 port'));

const mainRouter = require('./routes/main')
const heroesRouter = require('./routes/heroes')

app.use('/', mainRouter)

app.use('/heroes', heroesRouter)

app.get('*', (req, res) => {
    res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
});