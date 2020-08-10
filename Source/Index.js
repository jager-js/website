

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


Server.get('/portfolio.png', (req, res) => {
    res.sendFile(Path.join(__dirname + '/Static/unknown.png'))
})


Server.get('/', (req, res) => {
    res.sendFile(Path.join(__dirname + '/Views/Index.html'))
})


Server.listen(8080, () => {
    console.log('Application Deployed! Goto http://localhost:8080/')
})