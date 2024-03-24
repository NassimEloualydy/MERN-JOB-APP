const express=require("express");
const route=express.Router();
const {signin,login,logout}=require("../controllers/userController")
const {auth}=require("../middlewares/auth")
route.post("/signin",signin);
route.post("/login",login);
route.post("/logout",auth,logout);
module.exports=route;