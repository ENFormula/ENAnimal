var mongoose = require('mongoose');
var TVShow  = mongoose.model('user');


//POST - /user/register
exports.createUser = function(req, res) {
   console.log('POST');

   var user = new user(req.body);
   user.save(function(err, user) {
    if(err) return res.send(500, err.message);
res.status(200).jsonp(user);
});
   res.status(200).jsonp(req.body);

};

