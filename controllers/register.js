var mongoose = require('mongoose');
var TVShow  = mongoose.model('user');


//POST - /user/register
exports.createUser = function(req, res) {
   console.log('POST');
   var userObject = new user({
    name:    req.body.name,
    surname:    req.body.surname,
    age:    req.body.age,
    email:    req.body.email,
    userType:    req.body.userType,
    hobbies:    req.body.hobbies,
    picture:    req.body.picture,
    password:    req.body.password,
    animals:    req.body.animals,
    userName:    req.body.userName
});
userObject.save(function(err, userObject) {
    if(err) return res.send(500, err.message);
res.status(200).jsonp(userObject);
});
   res.status(200).jsonp(req.body);

};

