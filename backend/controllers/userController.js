const jwt=require("jsonwebtoken");
const User=require("../models/User");
const joi=require("joi");
require("dotenv").config();
exports.login= async (req,res)=>{
    const {email,password}=req.body;
    const schema=joi.object({
        email:joi.string().required().messages({"string.empty":"Please the email is required !!","any.required":"Please the email is required !!"}),
        password:joi.string().required().messages({"string.empty":"Please the password is required !!","any.required":"Please the password is required !!"}),
    })
    const {error}=schema.validate({email,password});
    if(error)
    return res.status(400).json({err:error.details[0].message});
    var user=await User.findOne({email}).select()
    if(!user)
    return res.status(400).json({err:"The Email not found"})
    if(await !user.matchPassword(password,user.password))
    return res.status(400).json({err:"The password doesn't match"})        

    const token=jwt.sign({user},process.env.JWT_SECRETE,{expiresIn:"30d"})
    return res.json({token,first_name:user.first_name,last_name:user.last_name,role:user.role})
    
    // const decoded=jwt.verify(token,process.env.JWT_SECRETE);
    // console.log(decoded);

}
exports.signin=  async (req,res)=>{
    const {first_name,
    last_name,
    sexe,
    phone,
    date_of_birth,
    email,
    password}=req.body;   
    const schema=joi.object({

        first_name:joi.string().required().messages({"string.empty":"Please the first name is required !!","any.required":"Please the first name is required !!"}),
        last_name:joi.string().required().messages({"string.empty":"Please the last name is required !!","any.required":"Please the last name is required !!"}),
        sexe:joi.string().required().messages({"string.empty":"Please the sexe is required !!","any.required":"Please the sexe is required !!"}),
        phone:joi.string().required().messages({"string.empty":"Please the phone is required !!","any.required":"Please the phone is required !!"}),
        date_of_birth:joi.string().required().messages({"string.empty":"Please the birth of date is required !!","any.required":"Please the birth of date is required !!"}),
        email:joi.string().required().messages({"string.empty":"Please the email is required !!","any.required":"Please the email is required !!"}),
        password:joi.string().required().messages({"string.empty":"Please the password is required !!","any.required":"Please the password is required !!"}),

    })
    const {error}=schema.validate({
        first_name,
    last_name,
    sexe,
    phone,
    date_of_birth,
    email,
    password
    })
    if(error){
        return res.status(400).json({err:error.details[0].message})
    }
    var user=await User.find({first_name,last_name}).select()
    if(user.length!=0){
        return res.status(400).json({err:"Please the first name and the last name is already exist !!"});
    }
    var user=await User.find({phone}).select()
    if(user.length!=0){
        return res.status(400).json({err:"Please the Phone is already exist !!"});
    }
    var user=await User.find({email}).select()
    if(user.length!=0){
        return res.status(400).json({err:"Please the Email is already exist !!"});
    }
    const u=await User.create({
        first_name,last_name,email,phone,password,sexe,date_of_birth,role:"user",status:"Created"
    })
    if(u)
    return res.json({msg:"Sign In With Success"});
    return rss.status(400).json({err:u});    

}
exports.logout=async (req,res)=>{
    const user=await User.findOneAndUpdate(
        {_id:req.user._id},{
            $set:{status:"Disconnected"}
        },{new:true}
    )
    if(user)
    return res.json({msg:"Disconnected with success"})
    return res.status(400).json({err:user})
}
