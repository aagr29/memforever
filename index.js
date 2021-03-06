const express = require('express'); // import express library

const app = express(); // app means server here 

const parser = require('body-parser');

app.use(parser.urlencoded()); 

app.set('view engine', 'ejs'); // use ejs view


app.use(express.static(__dirname+'/views'));
// app.use(express.static(__dirname+'/views/script'));



app.get('/', function (req, res){
res.render('index');
}
); // app is sever, / is route, function is how we should respond

app.get('/tracking', function (req, res){
    res.send("tracking in general");
    }
    );
app.get('/daily', function (req, res){
        res.render('daily');
        }
        );
app.get('/daily/add', function (req, res){
        res.render('addDaily');
        }
        );   
app.get('/game', function (req, res){
        res.render('game');
        }
        );
app.get('/map', function (req, res){
        res.render('map');
        }
        );
        
app.get('/user', function (req, res){
    res.send("user log in + data");
    }
    );
app.listen('3005');