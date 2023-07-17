const User = require("../model/user.model")

exports.signupService=async(userInfo)=>{
	const user=await User.create(userInfo);
	return user;
}
exports.findUserByEmail=async(email)=>{
	const res=await User.findOne({email})
	return res;
}
exports.loginService=async(userInfo)=>{
	const user=await User.create(userInfo);
	return user;
}