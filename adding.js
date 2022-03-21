const express = require('express');
const app = express();

app.get('/sum',function(req,res){
    var a=Number(req.query.first);
    var b=Number(req.query.sec);
    var c;
    c=a+b;
    response = {
        result: c  
    };
    console.log(response);
    res.end(JSON.stringify(response));
}
);