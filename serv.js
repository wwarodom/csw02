var express = require('express'); 
var app = express(); 
  
var students = [ { "id":1, "code":"59101", "name":"John" },
				 { "id":2, "code":"59102", "name":"Jack" },
				 { "id":3, "code":"59103", "name":"Jim" } 
				];

// Q1: Write a function to print all students:
var list =  function () {  
	return students 
}
console.log( list())

// Q2: Write a function to print a student by given id
//   findId(2) =>  "id":2, "code":"59102", "name":"Jack" 
var findId = function(id) {
	return students[id-1]
}
console.log(findId(2))

m = findId(3)
console.log( m.id + ' :' + m.name)


app.use(function (req, res, next) { 
   console.log('Time:', Date.now()); 
   next(); 
}); 

app.use('/user/:id', function (req, res, next) { 
   console.log('Request Type:', req.method); 
   next(); 
});

app.get('/', function(req, res){ 
   res.send('Hello world') 
}); 

app.get('/user/:id', function (req,res) {
	m = findId(req.params.id)
	str = '<font size=5>id: ' + m.id + '<br>' +
		   'code: ' + m.code + '<br>' + 
		   'name: ' + m.name  +
		   '</font>'
	res.send( str )
});
  
app.listen(8000, function () {
	console.log('server is running... ')
});
