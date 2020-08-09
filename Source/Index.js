

/*

    Index.js

*/


const Express = require('express');
const Path = require('path');
const Server = Express();


Server.get('/Home.css', (req, res) => {

    res.sendFile(Path.join(__dirname + '/Static/Home.css'))
    res.end()

})


Server.get('/', (req, res) => {

    res.sendFile(Path.join(__dirname + '/Views/Index.html'))
    res.end()

})


Server.listen(8080, () => {

    console.log('Application Deployed!')

})