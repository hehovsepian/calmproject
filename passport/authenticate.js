import passportJWT from './config.js';

function authenticate(req, res, next) {
    passportJWT.authenticate('jwt', { session: false }, (err, user, info) => {
      if (err) {
        return next(err);
      }

      if (!user) {
        req.error = 'invalid token, please log in or sign up';
        return next();
      }

      req.user = user;
      return next();
    })(req, res, next);
  }


export default authenticate;
