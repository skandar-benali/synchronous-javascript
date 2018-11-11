const express = require('express');
const request = require('request');
let app = express();
app.listen(3000, () => {
    console.log('See that we got the result as undefined ');

    const url = 'https://reqres.in/api/users/2'; // test url
    let firstName; // this variable will contain the http response

    // probleme
    request(url, (err, res, body) => {
        if (err) return err;
        firstName = JSON.parse(body).data.first_name;
    });

    console.log('first name => ', firstName); // we expect here to see the result but got undefined
});
