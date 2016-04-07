var express = require('express'), 
    app = express(),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser')

app.use(express.static('public'))


app.use(cookieParser('keyboard cat')) 
  
app.get('/ck_get', function(req, res) { 
	var str = req.cookies.a + ' ' + req.cookies.b
   res.send(str) 
}) 
  
app.get('/ck_set', function(req, res) { 
   res.cookie('a', 10) 
   res.cookie('b',33)
   res.send('ok') 
})

  
var urlencodedParser = bodyParser.urlencoded({ extended: false }); 
app.use(express.static(__dirname + '/public')); 
  
app.post('/add', urlencodedParser, function(req, res){ 
   var result = parseInt(req.body.a) + parseInt(req.body.b); 
   res.send('<h1>Result = ' + result + '</h1>' +	
   				req.body.secret ); 
});
  
app.get('/', function(req, res){ 
   res.send('<img src=images/boy.gif>') 
})

app.listen(8000, function() {
	console.log("Server is running...")
})