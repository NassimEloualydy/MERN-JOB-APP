const bcryptjs=require("bcryptjs");
const jwt=require("jsonwebtoken")
require("dotenv").config();
exports.auth=async (req,res,next)=>{
    if(!req.headers.auhtorization)
    return res.status(400).json({err:"Unauthrized Request"})
    const token=req.headers.auhtorization.split(" ")[1]
    const JWT_SECRETE=process.env.JWT_SECRETE
    const {user}=jwt.verify(token,JWT_SECRETE)
    req.user=user
    next();
}