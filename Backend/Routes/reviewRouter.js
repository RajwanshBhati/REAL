import express from "express"


import  formidable from 'express-formidable';
import { isAdmin, requireSignIn } from "../middleware/adminAuth.js";
import { getReview, reviewController } from "../Controllers/review.js";



let router=express.Router();


router.post('/create-review',requireSignIn,formidable(),reviewController);

router.get('/get-review',getReview)







export default router;