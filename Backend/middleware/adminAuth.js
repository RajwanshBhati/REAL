

import jwt from 'jsonwebtoken'

  export const isAdmin=async(req,res,next)=>{
 
  
  try {

    const {email,password}=req.body;
   let Admin="admin@gmail.com";
   let code=54321;
  if(email!=Admin && code!=password){
   return res.status(401).send({
      sucess:false,
      message:"Unauthorized acess",

    })
  }
   else{
   let Admin="admin@gmail.com"
    let token=await jwt.sign({Admin},process.env.JWT_SECRET,{expiresIn:"7d"})
    req.user=token;
  next();
  }
    
  } catch (error) {
    
    console.log(error)
    res.status(401).send({
      sucess:false,
      message:"Error in adminMiddleware"
    })
  }
}


export const requireSignIn=(req,res,next)=>{


  try {


   
    const decode=jwt.verify(req.headers.authorization,process.env.JWT_SECRET);




next();
  } catch (error) {
    
   console.log(error)
   return res.send({
    message:"Error in login",
    success:false
   })
   

  }
}
