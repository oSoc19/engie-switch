const jwt = require('jsonwebtoken');
const config = require('./config');
const checkToken = require('./checkToken');

module.exports = (req, res, next) => {
  let id = req.savedUser._id;

  req.db.User.findById(id).exec()
  .then((user) => {

    if(!user) throw new req.createError(404,"Couldn't find user " + req.savedUser._id);
    else
    {
      let token = jwt.sign({id: id}, config.secret);
      return token;
    }
  })
  .then((token) => {
    
    console.log(token);
    res.json({
      success: true,
      message: 'Authentication successful!',
      token: token,
      user: req.savedUser
    });
  })
  .catch(err => {
    console.log(err);
    next(err);
  });
};
//TODO: Check if this really works
