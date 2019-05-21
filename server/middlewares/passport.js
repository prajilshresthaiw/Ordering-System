const passport 		   = module.exports = require('passport');
const GoogleStrategy    = require('passport-google-plus-token');

const { generateToken }                      = require('@utils/JWT');
const { get: getUser, create: createUser }   = require('@services/user')
const { googleClientID, googleClientSecret } = require('@config/keys');

passport.use(
	new GoogleStrategy({
		clientID: googleClientID,
		clientSecret: googleClientSecret,
	}, async (accessToken, refreshToken, profile, done) => {
      try {
         const { displayName, id, emails }  = profile;
         const user = await getUser({ googleId: id }, true);
         if(user) {
            let token = generateToken({ _id: user._id });
            return done(null, { user, token });
         } 
         try{
            const newUser = await createUser({ googleId: id, name: displayName, email: emails[0].value, method: 'google' });
            let token = generateToken({ _id: newUser._id });
            done(null, { user: newUser, token });
         } catch(e) {
            done(null, { error: e.message });
         }
      } catch(e) {
         console.log(e.message, 'Error fetching socially loggedin user')
         done(null, { error: 'error_fetching_user'  });
         done(e)
      }
	})
);