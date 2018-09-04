exports = module.exports = function(app, mongoose) {
    
        var advert = new mongoose.Schema({
            name: 		{ type: String },
            userName: 		{ type: String }

        });
    
        mongoose.model('adverts', advert);
    
    };