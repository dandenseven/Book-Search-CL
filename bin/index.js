#!/usr/bin/env node
require('dotenv').config();


const apiKey = process.env.API_KEY
console.log(apiKey)

const yargs = require("yargs");
const axios = require("axios")

const options = yargs
    .usage("Usage: -n ")
    .option("n", {alias: "name", describe: "Authors Name", type: "string", demandOption: true })
    .option("s", {alais: "book", describe: "Title", type: "string"})
    .option("p", {alais: "publisher", describe: "Publishers Name", type: "string"})
    .argv;

// calling google book api
const url = options.search ? `GET https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=API_KEY{(options.search)}`;

axios.get(url, {headers: {Accept: "application/json"} })
    .then(res => {
        if (options.search) {
            var _ = require("underscore");
            var bookList = []
            res.data.results.forEach(element => {
                
            });
        }
    })
