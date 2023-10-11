const User = require("../models/userModel");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");

exports.registerUser = async(req,res)=>{
    try{
        const {username,useremail,userpassword} = req.body;

         // validation
        if(!username || !useremail || !userpassword){
            return res.status(400).json({
                success:false,
                message:"All Fields are required"
            })
        }

        // check exist email
        const userCheck = await User.findOne({useremail});
        if(userCheck){
            return res.status(400).json({
                success:false,
                message:"User Already Registered"
            })
        }
             // hash password
            const hashPassword = await bcrypt.hash(userpassword,10);
            console.log("Hashed Password",hashPassword);

        // create new User registerd
        const newUser = await User.create({
            username,
            useremail,
            userpassword:hashPassword,
        })
        if(newUser){
            console.log(`User Created Successfully ${newUser}`)
            return res.status(200).json({
                message:"user register",
                data:newUser
            })
        }
          

        
    }
    catch(err){
        return res.status(500).json({
            success:false,
            message:"Sorry, User not Registered"
        })
    }
}
exports.loginUser = async(req,res)=>{
    try{
        const {useremail,userpassword} = req.body;

        // validation
        if(!useremail || !userpassword){
            return res.status(400).json({
                success:false,
                message:"All Fields are required"
            })
        }


        // check user in database

        const userFind = await User.findOne({useremail});

        if(!userFind){
           return  res.status(401).json({
            success:false,
            message:"Sorry, Sir You are Not Registerd"
        }) 
        }

        // matched Password
        const isPassswordCorrect = await bcrypt.compare(userpassword,userFind.userpassword);

        if(!isPassswordCorrect){
            return res.status(401).json({
                success:false,
                message:"password is incorrect"
            })
        }


        const accessToken = jwt.sign({
            user:{
                username:userFind.username,
                useremail:userFind.useremail,
                id:userFind.id,
            },
        },process.env.ACCESS_TOKEN_SECRET,{expiresIn:"10m"}
        );

        console.log(`user logged in Successfully ${userFind}`)
            return res.status(200).json({
				success: true,
				message: `Log in successfull`,
                token:accessToken
			});
        

    }
    catch(err){
        return res.status(500).json({
            success:false,
            message:"Sorry, User Loggedin Problem"
        })
    }
}
exports.currentUser = async(req,res)=>{
    res.json({
        message:"Current User Information",
        user:req.user,
        id:req.user.id
    })
}
    
    