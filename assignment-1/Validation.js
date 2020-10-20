// Validation module

const Joi = require('joi');

function validate(user) {
    const schema = Joi.object({
        username: Joi.string().required(),
        password: Joi.string().min(8).required()
    });

    const validationResult = schema.validate(user);

    if(validationResult.error) console.log(validationResult.error.details[0].message);
    console.log('Validation completed.');
}

module.exports = {
    validate
};