const user = require("../node_models/userShema")

//getUser
const  getUser = async(req,res)=>{
   try{
        const users= await User.find()
    }
    catch(error){
        res.status(500),json({msg:error.msg})
    }
}

//createUser

const deleteUser = async(req,res)=>{
    try{
        const newUser = await findByIdAndDelete(req.params.id,{...req.body}).create(req.body)
        res.status(200).json({msg:"user deleted", user:users})
    }
        
      
    catch(error){
        res.status(500).json({msg:error.msg})
    }
}

module.exports={createUser , getUser , updateUser,deleteUser}