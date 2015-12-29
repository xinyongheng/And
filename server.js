var express = require("express");

var ejs = require("ejs");
var flash = require("connect-flash");
var cookie = require("cookie-parser");
var parser = require("body-parser");
var session = require("express-session");

var Config = require("./config/config");
var routes = require("./routes");

var app = express();

app.engine("html", ejs.__express);
app.set("view engine", "html");
app.set("port", process.env.PORT || 5678);
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/public"));

app.use(flash());
app.use(cookie());
app.use(parser.json());
app.use(parser.urlencoded({
    extended: true
}));
app.use(session({
    secret  : Config.cookie.secret,
    resave  : false,
    saveUninitialized: true,
    cookie  : {
        secure: true,
        maxAge: 1000 * 60 * 60 * 24 * 30
    }
}));

app.listen(app.get("port"), function () {
    return console.log("测试服务器启动，服务端口 " + (app.get("port")));
});

routes(app);