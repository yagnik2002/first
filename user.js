const express= require('express')
const session = require('express-session')
let cookieParser = require('cookie-paeser')
const app = express()

app.use(cookieParser());

app.use(session({
    secret: 'Your_Secret_key',
    resave: true,
    saveUninitialized: true
}))

/* Session  */
app.get("/", function(req,res){
    req.session.name = 'demo'
    return res.send("Session set")
})

app.get("/session", function(req, res){
    var name =req.session.name
    return res.send(name)
})

app.get("/delete", function(req, res){
    req.session.destroy(function(error){
        res.send('session Delete');
    })
})


/* Cookie */

let users = {
    name :"Ritik",
    Age  :"18"
}
app.get('/setuser', function(req, res){
    res.cookie("userData", users);
    res.send('user data added to cookie');
});


app.get('/getuser',function(req, res){
    res.send(req.cookie);
});

app.listen(8000);


