var mongoose = require('mongoose');
var adverts  = mongoose.model('adverts');


exports.findAllAdverts = function(req, res) {
    adverts.find(function(err, adverts) {
    if(err) res.send(500, err.message);
 
    console.log('GET /adverts')
        res.status(200).jsonp(adverts);
    });
 };

 exports.findByName = function(req, res) {
    
    adverts.find({ 'userName': req.params.userName }, function (err, user) {
    
        if (err) return res.status(500).jsonp({"error": "error"});
        if(!user) return res.status(404).send({message: "No hay usuarios para dicho nombre de usuario"});
    
        res.status(200).jsonp(user);
      });
    };