var express = require('express');
var fs = require('fs');

var app = express();

app.use(express.static('./'))

app.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html');
})

app.get('/hotjson',function(req,res){
    fs.readFile(__dirname + '/public/home_page/hot.json',function(err,data){
        if(err){
            console.log(err)
        }else{
            var json = JSON.parse(data);
            res.json(json);
        }
    })
})

app.get('/tougaojson',function(req,res){
    fs.readFile(__dirname + '/public/home_page/tougao.json',function(err,data){
        if(err){
            console.log(err)
        }else{
            var json = JSON.parse(data);
            res.json(json);
        }
    })
})

app.get('/paihangjson',function(req,res){
    fs.readFile(__dirname + '/public/home_page/paihang.json',function(err,data){
        if(err){
            console.log(err)
        }else{
            var json = JSON.parse(data);
            res.json(json);
        }
    })
})

app.listen(3000,function(){
    console.log('服务器已启动：http://localhost:3000')
})