var express = require("express"),
    ejs = require("ejs"),
    app = express(),
    bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));


app.get ('/', (req, res) => {
    res.render('home', {value: null, verified: "false"});
});

app.post('/', (req, res) => {
    res.redirect('home', {verified: "true", value: value});
});

app.listen(3000, process.env.IP, () => {
    console.log("Port up and running");
});