
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('Harithamol/Quiz-Application/dist/'));

app.get('/*', function(req,res) {
    
res.sendFile('./dist/quizapp/index.html');
});

app.listen(process.env.PORT || 8080);
