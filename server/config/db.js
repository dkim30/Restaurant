let mongoose = require('mongoose');
let fs = require('fs');
let path = require('path');
var models_path = path.join(__dirname, '/../models');
mongoose.connect('mongodb://localhost/restaurants');



fs.readdirSync(models_path).forEach(function(file) {
if(file.indexOf('.js') >= 0) {
    require(models_path + '/' + file);
}
})