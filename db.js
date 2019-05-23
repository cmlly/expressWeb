var mongoose = require('mongoose');
var url = "mongodb://localhost:27017/myhome";
mongoose.connect(url);

var db = mongoose.connection;
db.on('error',console.error.bind(console,"fail"));
db.once('open',function(){
    console.log('successfully connect to'+url);
})

var Schema = mongoose.Schema;

let user = {
    name:String,
    password:String,
    phone:Number,
    email:String
}

var userSchema = Schema(user)
var User = mongoose.model('User', userSchema); //将schema编译为model构造函数

module.exports = {mongoose,User}