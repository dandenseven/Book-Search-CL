#!/usr/bin/env node
require('dotenv').config();
// import axios from 'axios';


process.env.API_KEY


const yargs = require("yargs")(process.argv.slice(2));
const axios = require("axios").default;
// const { option, argv, alias, require } = require('yargs');
console.log(process.argv);


const options = yargs
    .scriptName("index1")
    .usage("Usage: -n <author>")
    .usage("Usage: -t <title>")
    .usage("Usage: -p <publisher>")
    .example("$0 -n Bruce Lee -t Bruce Lee Artist of Life -p Tuttle Publishing")
    .option("n",{alias: "author", describe: "Authors Name", type: "string"})
    .option("t",{alias: "title", describe: "Book", type: "string"})
    .option("p",{alias: "publisher", describe: "Publishers Name", type: "string"})
    .option("s",{alias: "search", describe: "Search term", type: "string"})
    .argv;


console.log(yargs)

var readingList = []

// if (options.search) {
//     console.log(`Searching for books with author ${options.search}...`)
// } else {
//     console.log("No books for author: ");
// }



// calling google book api
const url = options.search ? `https://www.googleapis.com/books/v1/volumes?q=search+terms{escape(options.search)}` : `https://www.googleapis.com/books/v1/volumes?q=inauthor+intitle+inpublisher&key=AIzaSyBw1JRjBMhN0AAggwRRVvfs1dYn07lujNY`;

axios.get(url, {headers: {Accept: "application/json"} })
    .then(res => {
    
        if (options.search) {
            res.data.results.forEach(b =>{
                console.log("\n" + b.book); 
            } );
            if (res.data.results.length === 0) {
                console.log("no books found : '(");
            }
        } else {
            return readingList
            console.log(n.readingList)
        }
            
    });
        

// axios.get('/bad-call') 
//     .catch(function(error) {
//         if (error.response) {
//             console.log(err.response.status);
//             console.log(err.response.data);
//             console.log(err.response.headers);
//         }   else if (error.request) {
//             console.log(error.request);
//         }   else {

//             console.log('Error', error.message);
//         }
    
//     });











// async function bookReader() {
//     const apiKey = process.env.API_KEY
//     console.log(process.env)

//     const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=inauthor+intitle+inpublisher&key=process.env.API_KEY`, {
//         headers: {
//                 Accept: 'accept',
//                 Authorization: 'authorize'
//             },
//         }) .then(response => {
//                 return response;
//         }) .catch(err => {
//                 console.log(err);
//         })
    

//     const bookUser = await response.json();
//     console.log(bookUser)
// };



async function bookData() {
    
    const url = `https://www.googleapis.com/books/v1/volumes?q=search+terms{escape(options.search)}`;
    axios.get(url, {headers: {Accept: "application/json"} })
        .then(res => {
    
        data.forEach(obj => {
            Object.entries(obj).forEach(([key, value]) => {
                console.log(`${key} ${value}`);
            });
            console.log(bookData);
        });