var jwt=require('jsonwebtoken')
var userModel=require('../models/user')

const auth=async (req,res,next)=>{

        const check=req.header('Authorization')
        if(check)
        {
            const token=req.header('Authorization').replace('JWT ','')
            jwt.verify(token,'mysecret',(err,user)=>{
                if(err)
                {
                    console.log(err)
                    res.status(403).send({"error":"please authenticate user"})
                }
                else{
                    req.user = user;
                next();
                }
                
            })
        }
        else{
            res.status(401).send({"error":"please authenticate user"})
        }
}

module.exports=auth