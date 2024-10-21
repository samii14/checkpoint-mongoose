const express = require("express")
const router = expores.Router()
const {createUser , getUser}= require("../controllers/userController")


router.get("/get", getUser)
router.post("/post", createUser)
router.put("/put/:id", updateUser)
router.delete("/delete/:id", deleteUser)


module.exports=router


 