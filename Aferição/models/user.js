var mongoose = require('mongoose')
var Schema = mongoose.Schema


var UserSchema = new Schema({
    user: {type: String, required: true},
    pass: {type: String, required: true}
})

module.exports = mongoose.model('User', UserSchema, 'users')
