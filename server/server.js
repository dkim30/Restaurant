let express = require("express");
let bodyParser = require("body-parser");
let session = require("express-session");
let app = express();
let clientDir = __dirname.substring(0,__dirname.length-6) +"client"; 

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(session({
    secret:"hideme",
    secret: "101",
    resave: false,
    saveUninitialized: true,
}));
app.use(express.static(clientDir+'/dist/client'));

require("./config/db.js");
require("./config/routes.js")(app);

app.listen(8000, function() {
})
