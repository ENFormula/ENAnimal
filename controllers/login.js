var mongoose = require('mongoose');
var TVShow  = mongoose.model('dogs');


//POST - /user/login
exports.loginUser = function(req, res) {
   console.log('POST');
   console.log(req.body);

   var tvshow = new dogs({
       name:    req.body.name
   });

   tvshow.save(function(err, tvshow) {
       if(err) return res.send(500, err.message);
   res.status(200).jsonp(tvshow);
   });
};

