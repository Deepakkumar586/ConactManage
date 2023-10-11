const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
        username:{
            type:String,
            required:[true,"Please add the User"],
        },
        useremail:{
            type:String,
            required:[true,"Please add the User Email"],
            unique:[true,"Email address already Registerd"]
        },
        userpassword:{
            type:String,
            required:[true,"Please add the user password"],
        },
},
            {
                timestamps:true,
            }        
)


module.exports = mongoose.model("User",userSchema)