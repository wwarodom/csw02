var express = require('express'),
	app	= express()

var posts_json = [ 
		{'user':'John',
		'comment':'This is my message'
		},
		{'user':'Jack',
		'comment':'This is my 2nd message'
		}
		 ]

app.set('views', './views') 
app.set('view engine', 'jade') 

app.get('/', function(req,res) {
	res.render('post',{title:'Post title',
					message: 'My messsage',
					posts: posts_json})
})

app.listen(8000,function() {
	console.log('Server is running...')
})