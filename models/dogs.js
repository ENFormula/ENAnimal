exports = module.exports = function(app, mongoose) {
    
        var tvshowSchema = new mongoose.Schema({
            name: 		{ type: String }
        });
    
        mongoose.model('dogs', tvshowSchema);
    
    };