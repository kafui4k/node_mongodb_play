var mongoose = require('mongoose');

mongoose.Promise = global.Promise; 

mongoose.connect('mongodb://localhost:27017/TodoApp');


// export mongoose
module.exports = {mongoose}