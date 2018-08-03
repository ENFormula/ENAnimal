var mongoose = require('mongoose');
var TVShow  = mongoose.model('dogs');

//GET - Return a TVShow with specified ID
exports.findById = function(req, res) {
   TVShow.findById(req.params.id, function(err, tvshow) {
   if(err) return res.send(500, err.message);

   console.log('GET /user/' + req.params.id);
       res.status(200).jsonp(tvshow);
   });
};