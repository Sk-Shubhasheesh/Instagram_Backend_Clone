const express = require("express")
const router = express.Router()


//REGISTER
router.post("/register",registerController)

//LOGIN
router.post("/login",loginController)


//LOGOUT
router.get("/logout",logoutController)


//FETCH CURRENT USER
router.get("/refetch",refetchUserController)


module.exports = router