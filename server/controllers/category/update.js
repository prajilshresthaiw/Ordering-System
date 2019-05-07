const { update } = require('@server/services/category');
const validateCategoryInput = require('@validations/category/validate-input');

module.exports = async (req, res) => {
   const data = req.body;
   const { error } = validateCategoryInput(data);
   if(error) {
      return apiResponse.badRequest(res, { data: error });
   }

   try {
      let category = await update({ _id: req.params._id }, data);
      return apiResponse.success(res, { message: 'updated_category', data: category });
   } catch(e) {
      return apiResponse.serverError(res, {data: e.message });
   }
}