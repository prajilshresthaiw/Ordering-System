const Joi = require('joi');


/**
 * @param {Object} data - data for validation
 */
module.exports = function (data) {
   const schema = {
      user: Joi.string().required(),
      item: Joi.string().required(),
      status: Joi.number().required(),
   }; 

   let { user, item, status } = data;
   return Joi.validate({ user, item, status }, schema, { abortEarly: false });
}