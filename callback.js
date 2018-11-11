const express = require('express');
const request = require('request');
let app = express();
app.listen(3000, () => {
    console.log('callback method to use asynchronous functions result');

    const url = 'https://reqres.in/api/users/2'; // test url
    let firstName; // this variable will contain the http response

    // we can simply put our implementation inside the callback
    request(url, (err, res, body) => {
        if (err) return err;
        firstName = JSON.parse(body).data.first_name;
        console.log('res => ', firstName);
        // put the rest of your code that depends on the result here
    });

});