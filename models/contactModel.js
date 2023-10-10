const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Write the contact name"],
    },
    email:{
        type:String,
        required:[true,"Please Write the Email address"],
    },
    phone:{
        type:String,
        required:[true,"Please Write the Phone number"],
    },
    
},
{
    timestamps:true,
}
)
module.exports = mongoose.model("Contact",contactSchema)