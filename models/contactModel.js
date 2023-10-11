const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
    {
        user_id:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"User",
        },
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