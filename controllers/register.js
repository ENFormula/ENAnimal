var mongoose = require('mongoose');
var TVShow  = mongoose.model('user');


//POST - /user/register
exports.createUser = function(req, res) {
   console.log('POST');
   console.log(req.body);

   res.status(200).jsonp(req.body);

};

