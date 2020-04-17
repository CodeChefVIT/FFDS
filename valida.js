const Joi = require('@hapi/joi');
//validation for registration.
const registerValidation =  (data) => {
    const schema =  Joi.object({
        name : Joi.string()
        .min(6)
        .max(100)
        .required(),
    email : Joi.string()
        .min(6)
        .max(100)
        .required()
        .email(),
    password : Joi.string()
        .min(8)
        .required(),
    gender : Joi.string()
         .min(4)
         .required()
    });
    return schema.validate(data);   
}
  //validation for login.
const loginValidation = (data) => {
    const schema = Joi.object ({
        email : Joi.string()
            .min(6)
            .max(100)
            .required()
            .email(),
        password : Joi.string()
            .min(8)
            .required()
    });    
    return schema.validate(data);

};

module.exports.registerValidation = registerValidation ;
module.exports.loginValidation = loginValidation ;