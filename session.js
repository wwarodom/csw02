var express = require('express'),
	app = express(),
	session = require('express-session')

app.use(session({ secret: 'keyboard cat', 
				  cookie: { maxAge: 60000 },
				  resave: true,
				  saveUninitialized: true
				}))

app.use(function(req, res, next) { 
   var sess = req.session 
   if (sess.views) { 
      sess.views++ 
   } else { 
      sess.views = 1 
   } 
   next();
})

app.get('/', function(req, res,next) {
	var str = req.session.views + 
		'<br>maxAge: ' + req.session.cookie.maxAge;
	res.send('Session.views = ' + str);
})

app.listen(8000, function() {
	console.log("server is running")
})
