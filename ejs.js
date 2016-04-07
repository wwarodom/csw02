var express = require('express'),
	app	= express(),
	bodyParser = require('body-parser')


var posts_json = [ 
		{'user':'John',
		'comment':'This is my message'
		},
		{'user':'Jack',
		'comment':'This is my 2nd message'
		}
		 ]

app.set('views', './views') 
app.set('view engine', 'ejs') 

app.get('/', function(req,res) {
	res.render('post',{title:'Post title',
					message: 'My messsage',
					posts: posts_json})
})

var urlencodedParser = bodyParser.urlencoded({extend: false})

app.post('/', urlencodedParser, function(req,res){
	// ===  type1 ====
	posts_json.push( { 'user': req.body.user, 
					 'comment': req.body.comment})
	res.redirect('/')

	// ===== type 2 ====
	var tmp = {}
	tmp.user = req.body.user
	tmp.comment = req.body.comment
	posts_json.push(tmp)
	res.render('post',{title:'Post title',
					message: 'My messsage',
					posts: posts_json})

	// ===  type 3 ====
	var length = Object.keys(posts_json).length
	posts_json.push({})
	posts_json[length].user = req.body.user
	posts_json[length].comment = req.body.comment
	res.redirect('/')
	
})

app.listen(8000,function() {
	console.log('Server is running...')
})