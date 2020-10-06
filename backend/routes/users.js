//Express package route
const router = require('express').Router();
//Mongoose Model
let User = require('../models/user.model');

//First endpoint that handles http git requests on /users path
router.route('/').get((req, res) => {
    //Mongoose Method that gets all users (rets json)
    User.find()
        //return in json format(users)
        .then(user => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Handles http post requests
router.route('/add').post((req, res) => {
    //username is part of the request body
    const username = req.body.username;

    //create new instance of user using username
    const newUser = new User({username});

    //save new User into the database
    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => status(400).json('Error: ' + err));
});

//standard to export so it could be used
module.exports = router;