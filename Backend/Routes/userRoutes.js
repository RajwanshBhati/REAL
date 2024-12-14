import express from "express"
import { getAllUsers, registerController } from "../Controllers/userRegister.js";
import { isAdmin } from "../middleware/adminAuth.js";
let router=express.Router();



router.post('/register',registerController);
router.get('/getUsers',getAllUsers)


router.post('/adminRoutes',isAdmin,(req,res)=>{
  const token=req.user;
  res.send({
    success: true,
    token
  })
})






export default router;