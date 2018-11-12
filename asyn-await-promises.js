const express = require('express');
const request = require('request');
const axios = require('axios');
let app = express();
app.listen(3000, () => {
    console.log('Promise with Async-Await method to use asynchronous functions result');
    const url1 = 'https://reqres.in/api/users/1'; // test url
    const url2 = 'https://reqres.in/api/users/2'; // test url
    let firstName1; // this variable will contain the http response
    let firstName2;

    function CallAPI(url){
        return new Promise( (resolve,reject) => {
            request(url, (err, res, body) => {
                if (err) return reject(err);
                resolve(JSON.parse(body).data.first_name);
            });
        });
    }
    async function makeIt(){
        firstName1 = await CallAPI(url1);
        console.log(firstName1)
        firstName2 = await CallAPI(url2);
        console.log(firstName2);
    }
   makeIt();

});