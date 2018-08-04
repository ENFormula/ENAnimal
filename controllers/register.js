var mongoose = require('mongoose');
var user = mongoose.model('user');
var passwordValidator = require('password-validator');
var schema = new passwordValidator();
// Add properties to it
schema
    .is()
    .min(8)
    .is()
    .max(100)
    .has()
    .digits()
    .has()
    .uppercase();

//POST - /user/register
exports.createUser = function (req, res) {
    console.log('POST');
    var userObject = new user({
        name: req.body.name,
        surname: req.body.surname,
        age: req.body.age,
        email: req.body.email,
        userType: req.body.userType,
        hobbies: req.body.hobbies,
        picture: req.body.picture,
        password: req.body.password,
        animals: req.body.animals,
        userName: req.body.userName
    });
    console.log(req.body);
    user.findOne({
        'email': req.body.email
    }, function (err, userExits) {

        if (err) 
            return res.status(500).jsonp({"error": "error"});
        if (!userExits) {
            if (schema.validate(req.body.password)) {
                userObject
                    .save(function (err, userObject) {
                        if (err) 
                            return res.send(500, err.message);
                        res
                            .status(200)
                            .jsonp(userObject);
                    });
            } else {
                return res
                    .status(401)
                    .jsonp({
                        "error": "La contraseña debe tener, letras y números, una mayúscula y contener más de 8 ca" +
                                "rácteres"
                    });

            }
        } else {
            return res
                .status(409)
                .jsonp({"error": "Usuario ya registrado con ese correo"});

        }
    });

};