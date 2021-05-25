'use strict';

const Users = require('../models/users.js')

module.exports = async (req, res, next) => {

  try {

    if (!req.headers.authorization) 
    { 
      next('Invalid Login');
     }

    const token = req.headers.authorization.split(' ').pop();
    const validUser = await Users.authenticateWithToken(token);

    req.user = validUser;
    // req.token = validUser.token;
     next();
  } catch (e) {
    next('Invalid token');;
  }
}
