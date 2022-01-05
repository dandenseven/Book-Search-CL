#!/usr/bin/env node
const {dotenv} = require('./dotenv/config');
const fs = require('fs');



const yargs = require("yargs");
const axios = require("axios").default;
const { title } = require('process');



const options = yargs
    .scriptName("index2")
    .usage("Usage: -n <author>")
    .usage("Usage: -t <title>")
    .usage("Usage: -p <publisher>")
    .example("$0 -n Bruce Lee -t Bruce Lee Artist of Life -p Tuttle Publishing")
    .option("n",{alias: "author", describe: "Authors Name", type: "string"})
    .option("t",{alias: "title", describe: "Book", type: "string"})
    .option("p",{alias: "publisher", describe: "Publishers Name", type: "string"})
    .option("s",{alias: "search", describe: "Search term", type: "string"})
    .argv;



const readingList = [];

// calling google book api to search or not
//api request failed to work with .env
const url = options.search ? `https://www.googleapis.com/books/v1/volumes?q=search+terms{escape(options.search)}` : `https://www.googleapis.com/books/v1/volumes?q=inauthor+intitle+inpublisher&key=process.env.API_KEY`;

axios.get(url, {headers: {Accept: "application/json"} })
    .then(res => {
        if (options.search) {
        readingList = res.data.items;
        let responseList = [];
        for (let i =0; i < responseList.length; i++) {
            const bookData = responseList[i].volumeData;
            const title = titleList(bookData.option('t', title));
            const authors = authorList(bookData.option('n', authors));
            const publisher =
                bookData.publisher === "" || bookData.publisher === undefined
                    ? "Non Listed"
                    : bookData.publisher;
            }
        }
            responseList[i] = {
                title: title,
                author: authors,
                publishing: publisher,
                name: `${title} by ${authors}, published by ${publisher}`
            };
            
        return responseList;


        });

    
// if searching for books, loop through the results
        if (options.search) {
            res.data.results.forEach( i => {
                // create a list of books from the loop
                readingList = i.book(
                console.log(readingList))
            }
            )};
            {
            if (res.data.results.length === 0) {
                console.log("no books found");
            }
            else {
                
                console.log(res.data.book);
            
            }; 
        };

// axios call error handling
axios.get(url, {headers: {Accept: "application/json"} })
    .catch(function (error) {
        if (error.res) {

            console.log(error.res.data);
            console.log(error.response.status);
            console.log(error.response.headers);

        } else if (error.res) {

            console.log(error.request);

        }  else {

            console.log('Error', error.message);
        };
    });
        
            

