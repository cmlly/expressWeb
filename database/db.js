import { Mongoose } from "mongoose";

var UsersSchema = new Mongoose.Schema({
    user_name:String,
    phone_number:Number,
    email:String
});

Mongoose.model("user",UsersSchema);