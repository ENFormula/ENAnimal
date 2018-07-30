var express     = require("express"),
app             = express(),
bodyParser      = require("body-parser"),
methodOverride  = require("method-override"),
mongoose        = require('mongoose');

var PORT = process.env.PORT||5000;
// Connection to DB
mongoose.connect('mongodb://hulio:enmivida1@ds020218.mlab.com:20218/hulio', function(err, res) {
if(err) throw err;
console.log('Connected to Database');
});

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

// Import Models and controllers
var models     = require('./models/dogs')(app, mongoose);
var TVShowCtrl = require('./controllers/dogs');

// Example Route
var router = express.Router();
router.get('/', function(req, res) {
res.send("Hello world!");
});
app.use(router);
// API routes
var tvshows = express.Router();
/*tvshows.get('/tvshows', function(req, res) {
  res.send("Hello world!"+ TVShowCtrl.findAllTVShows);
  });
  app.use(tvshows);*/
// API routes
var tvshows = express.Router();

tvshows.route('/tvshows')
.get(TVShowCtrl.findAllTVShows)
.post(TVShowCtrl.addTVShow);

tvshows.route('/tvshows/:id')
.get(TVShowCtrl.findById)
.put(TVShowCtrl.updateTVShow)
.delete(TVShowCtrl.deleteTVShow);

app.use('/api', tvshows);

// Start server
app.listen( PORT, function() {
console.log("Node server running on http://localhost:5000");
});
