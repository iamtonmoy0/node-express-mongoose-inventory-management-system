const express=require('express');
const userController=require('../../controllers/user.controller');
const verifyToken = require('../../middleware/verifyToken');
const router =express.Router();

router.route('/signup')
 .post(userController.signup)

router.route('/login')
 .post(userController.login)

router.route('/me')
 .get(verifyToken,userController.getMe)



module.exports=router;