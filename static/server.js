const express = require("express")
const bodyParser = require("body-parser")
const app = express();
const http = require ("http")
const path = require("path")

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

// bodyparser
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

// static folder
app.use(express.static(path.join(__dirname, 'public')))

// set port
const port = process.env.PORT ||  '9000';
app.set('port', port)

const server = http.createServer(app);
server.listen(port, () => {
    console.log(`Server is running on ${port}`)
})