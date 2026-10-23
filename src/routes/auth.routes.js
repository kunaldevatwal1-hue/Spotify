const express = require('express');
const validationRules= require('../middlewares/validation.middleware')
const authController = require("../controllers/auth.controllers")

const router = express.Router();



router.post(
    '/register',
    validationRules.registerUserValidationRules,
    validationRules.validateResult,
    authController.registerUser
);


router.post('/login', authController.loginUser)

router.post('/logout', authController.logoutUser)




module.exports = router;