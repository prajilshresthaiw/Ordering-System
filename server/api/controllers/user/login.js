const user                 = require('@models/user');
const { generateToken }    = require('@utils/JWT');
const pwd                  = require('@utils/password');
const validateLoginInput   = require('@validations/user/login');

module.exports = async (req, res) => {
   try {
      const { error } = validateLoginInput(req.body);
      if (error) {
         return apiResponse.badRequest(res, { data: error.details });
      } 

      let userDoc = await user.findOne({ email: req.body.email })
         .select({ role: 1, password: 1, method: 1, is_email_verified: 1 })

      if(!userDoc) {
         return apiResponse.notFound(res, { message: 'invalid_email_password' });
      }

      if(userDoc.method !== 'local') {
         return apiResponse.badRequest(res, { message: `invalid_email_password`});
      }

      const canLogin = await pwd.comparePassword(req.body.password, userDoc.password || ''),
         { _id, role, is_email_verified } = userDoc;

      if(!is_email_verified) {
         return apiResponse.badRequest(res, { message: 'email_not_verified' });
      }

      if(!canLogin) {
         return apiResponse.badRequest(res, { message: 'invalid_email_password' });
      }

      const token = generateToken({ _id, role });
      return apiResponse.success(res, { message: 'login_successful', data: { user: { _id, role }, token }});
   } catch (e) {
      return apiResponse.serverError(res, { data: e.message });
   }
}