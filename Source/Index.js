

/*

    Index.js

*/


const Express = require('express');
const Path = require('path');
const Server = Express();


Server.get('/Home.css', (req, res) => {
    res.sendFile(Path.join(__dirname + '/Static/Home.css'))
})


Server.get('/header.svg', (req, res) => {
    res.sendFile(Path.join(__dirname + '/Static/header.svg'))
})


Server.get('/', (req, res) => {
    res.sendFile(Path.join(__dirname + '/Views/Index.html'))
})


Server.listen(8080, () => {
    console.log('Application Deployed!')
})