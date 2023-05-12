//https://pokeapi.co/api/v2/pokemon/{pokemonName}//
//ShortURL
const express = require('express');
const router = new express.Router();
router.use(express.json());
const { get } = require('lodash');
const { setHeadersForGet } = require('../setHeaders/setGetPokemonHeaders')
//@route GET /:pokemon
const BASE_URL = process.env.BASE_URL;
try {
    router.get("/getPokemon", setHeadersForGet, (req, res) => {
        console.log("getPokemon request",BASE_URL);
        // res.redirect will redireect to mentioned URL and will send back response from the new URL :  
        // Check for POST request : I am using for get request
        console.log(JSON.stringify(req.headers),"after setting header");
        const pokemonName = get(req, ["query", "pokemon"]);
        return res.redirect(`${BASE_URL}/${pokemonName}`);
    });

}
catch (error) {
    console.log("error occured.", error);
}

module.exports = router;





