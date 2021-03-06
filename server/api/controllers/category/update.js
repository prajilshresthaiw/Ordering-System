const Category = require('@models/category');
const validateCategoryInput = require('@validations/category/validate-input');

module.exports = async (req, res, next) => {
	const data = req.body;
	const { error } = validateCategoryInput(data);
	try {
		if (error) {
			apiResponse.badRequest({ data: error });
		}

		let category = await Category.findOneAndUpdate({ _id: req.params._id }, data, { new: true });
		return apiResponse.success(res, { message: 'updated_category', data: category });
	} catch (e) {
		return next(e);;
	}
}