var mongoose = require('mongoose');
var user = mongoose.model('user');

//GET - Return a user with an specific username
exports.loginUser = function (req, res) {

    user
        .findOne({
            'username': req.body.username
        }, function (err, userExits) {

            if (err) 
                return res.status(500).jsonp({"error": "error"});
            if (userExits) {
                if (req.body.password == userExits.password) {

                    return res
                        .status(200)
                        .jsonp(userExits);

                } else {
                    return res
                        .status(401)
                        .jsonp({"error": "Contraseña incorrecta"});
                }
            } else {
                return res
                    .status(401)
                    .jsonp({"error": "Usuario no registrado"});

            }
        });
}
