const jwt  = require("jsonwebtoken");

exports.validateToken = async (req,res,next)=>{
    
        let token;
        let authHeader = req.headers.Authorization || req.headers.authorization;

        if(authHeader && authHeader.startsWith("Bearer")){
                token = authHeader.split(" ")[1];
                jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,decoded)=>{
                    if(err){
                        return  res.status(401).json({
                            success:false,
                            message:"User is Not Authorized"
                        })
                    }
                    req.user = decoded.user;
                    next();
                });
                if(!token){
                    return  res.status(401).json({
                        success:false,
                        message:"User is not authorized and token missing"
                    })
                }
        }
    
}