var mongoose = require('mongoose');
var userProfile  = mongoose.model('user');

//GET - Return a user with an specific userName
exports.findById = function(req, res) {

userProfile.findOne({ 'name': req.params.userName }, function (err, person) {

    if (err) return res.status(500).jsonp({"error": "error"});
    if(!person) return res.status(404).send({message: "No hay usuarios para dicho nombre de usuario"});

    res.status(200).jsonp(person);
  });
};