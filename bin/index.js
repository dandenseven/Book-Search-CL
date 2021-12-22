#!/usr/bin/env node

const yargs = require("yargs");
const axios = require("axios")

const options = yargs
    .usage("Usage: -n <name>")
    .option("n", {alias: "name", describe: "Authors Name", type: "string", demandOption: true }
    )
    .argv;
const greeting = `Hello, ${options.name}!`;
console.log(greeting);

console.log("Here's a random joke for you:");

const url = "https://in"