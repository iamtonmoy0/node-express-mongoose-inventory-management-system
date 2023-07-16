const express=require('express');
const router=express.Router();
const categoryController=require('../../controllers/category.controller')


router.route('/')
 .post(categoryController.createCategory)
 .get(categoryController.getCategory)
router.route('/:id')
 .get(categoryController.getCategoryById)
 .delete(categoryController.deleteCategoryById)
 .patch(categoryController.updateCategoryById)
module.exports=router;