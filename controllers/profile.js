var mongoose = require('mongoose');
var userProfile  = mongoose.model('user');

//GET - Return a user with an specific userName
exports.findByName = function(req, res) {

userProfile.findOne({ 'username': req.params.username }, function (err, user) {

    if (err) return res.status(500).jsonp({"error": "error"});
    if(!user) return res.status(404).send({message: "No hay usuarios para dicho nombre de usuario"});

    res.status(200).jsonp(user);
  });
};


exports.updateUserCollection = function(req, res) {

    userProfile.findOne({ 'username': req.params.username }, function(err, user) {

        if(err) return res.status(500).send({message: "Se ha producido un error inesperado"});
        if(!user) return res.status(404).send({message: "No hay usuarios para dicho nombre de usuario"});

        user.picture = req.body.picture;

        user.save(function (err, userObject) {
            if (err) 
                return res.send(500, err.message);
            res.status(200)
               .jsonp(userObject);
        });
    });
};