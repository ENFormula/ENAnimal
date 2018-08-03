var mongoose = require('mongoose');
var TVShow  = mongoose.model('user');


//POST - /user/register
exports.createUser = function(req, res) {
   console.log('POST');
   var userObject = new user({
    name:    req.body.name
});
userObject.save(function(err, userObject) {
    if(err) return res.send(500, err.message);
res.status(200).jsonp(userObject);
});
   res.status(200).jsonp(req.body);

};

