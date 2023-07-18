const jwt =require('jsonwebtoken');

exports.generateToken=(userInfo)=>{
	const payload={
		email:userInfo.email,
		role:userInfo.role
	}
	const token=jwt.sign(payload,process.env.TOKEN,{
		expiresIn:"20h"
	})
	return token
}