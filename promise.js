const express = require('express');
const request = require('request');
const axios = require('axios');
let app = express();
app.listen(3000, () => {
    console.log('Promise method to use asynchronous functions result');

    const url = 'https://reqres.in/api/users/2'; // test url
    let firstName; // this variable will contain the http response

    const promise = new Promise( (resolve,reject) => {
        request(url, (err, res, body) => {
            if (err) return reject(err);
            firstName = JSON.parse(body).data.first_name;
            resolve();
        });
    });

    promise
        .then(data => {
        console.log('res 1 =>', firstName)
        // do the depending code here
    })
        .catch(err => console.log(err));

                /* ------Axios-------*/
    // axios supports promises natively , There is no need to explicitly declare new Promise
    axios.get(url)
        .then(res => {
            firstName = res.data.data.first_name;
            console.log('res 2 =>', firstName);
            // rest of code here
        })
        .catch(err => console.log(err));
});