const {body,validationResult} = require('express-validator');

// const errors = validateResult(req);

 function validateResult(req,res,next){
     const errors = validationResult(req)
    if (!errors.isEmpty()) {
    return res.status(400).json({
        errors: errors.array()
    });
}

    next();
}

const registerUserValidationRules=[


    body("username")
        .isString()
        .withMessage("Username must be a string")
        .isLength({ min: 3, max: 20})
        .withMessage("username must be betweeen 3 and 20 character"),

    body("email")
        .isEmail()
        .withMessage("Invalid email address"),

    body("password")
        .isLength({ min: 6})
        .withMessage("password must be at least 6 character long"),

     validateResult

]

module.exports= {
    registerUserValidationRules
    ,validateResult
}