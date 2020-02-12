
//const express = require('express');
//const path = require('path');

//const app = express();

//app.use(express.static('Harithamol/Quiz-Application/dist/'));

//app.use(express.static(__dirname, 'dist', {index: false}));

//server.listen(port, function() {
//    console.log("App running on port " + port);
//})

//app.get('/*', function(req,res) {
    
//res.sendFile('./dist/quizapp/index.html');
//});


//app.get('', function(req, res) {
//    res.sendFile(path.join(__dirname, 'src', 'index.html'));
//});

//app.get('/', function(req, res) {
//    res.sendFile(path.join(__dirname, 'src', 'index.html'));
//});


//app.listen(process.env.PORT || 8080);



const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('/dist/quizapp'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join('/dist/quizapp/index.html'));
});

app.listen(process.env.PORT || 8080);
