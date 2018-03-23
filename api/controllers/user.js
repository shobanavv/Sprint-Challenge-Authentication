const User = require('../models/userModels');
const bcrypt = require('bcrypt');

const createUser = (req, res) => {
  const { username, password } = req.body;
  // const passwordH = req.password;
  // create user takes in the username and password and saves a user.
  // our pre save hook should kick in here saving this user to the DB with an encrypted password.
  const user = new User({username, password });
  console.log(password);
  user.save((err, user) => {
    if(err) return res.status(422).send({ message: 'Error creating new user'});
   
    res.json({ sucess: 'User Saved succefully', user });
  });
};

module.exports = {
  createUser
};
