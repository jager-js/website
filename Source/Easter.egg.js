

/*

    Easter.egg.js

*/


const Express = require('express');
const Path = require('path');
const Server = Express();



Server.get('/', (req, res) => {
    res.sendFile(Path.join(__dirname + '/Static/gamer-moment.jpeg'))
})


Server.listen(6969, () => {
    console.log('Application Deployed!')
})