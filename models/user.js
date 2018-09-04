exports = module.exports = function (app, mongoose) {

    var user = new mongoose.Schema({
        name: {
            type: String
        },
        surname: {
            type: String
        },
        age: {
            type: String
        },
        email: {
            type: String
        },
        userType: {
            type: String
        },
        hobbies: {
            type: String
        },
        picture: {
            type: String
        },
        password: {
            type: String
        },
        animals: {
            type: [String]
        },
        username: {
            type: String
        }

    });

    mongoose.model('user', user);

};