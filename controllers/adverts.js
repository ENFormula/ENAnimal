var mongoose = require('mongoose');
var adverts  = mongoose.model('adverts');


exports.findAllAdverts = function(req, res) {
    adverts.find(function(err, adverts) {
    if(err) res.send(500, err.message);
 
    console.log('GET /adverts')
        res.status(200).jsonp(adverts);
    });
 };