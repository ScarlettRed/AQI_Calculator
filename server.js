var express = require("express"),
    ejs = require("ejs"),
    app = express(),
    bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get ('/', () => {
    res.render('home');
});

app.post ('/', () => {

});

app.listen(3000, process.env.IP, () => {
    console.log("Port up and running");
});