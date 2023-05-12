const express = require('express');
require('dotenv').config({path: __dirname + '/.env'})
const app = express();
app.use(express.json({
        extended: false,
    }
));
const getPokemon = require('./src/routes/getPokemon');
app.use(getPokemon);
const PORT = process.env.PORT||3001;


app.listen(PORT, () => console.log(`****************SERVER UP@!!${PORT}************************`))