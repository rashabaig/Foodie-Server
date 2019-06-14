const express = require('express');
const router = express.Router();
const UserModel = require('../db/models/UserModel');


// Creates a new user -- works
router.post('/newUser', (req, res) => {
	let newUser = req.body;
	UserModel.create(newUser).then((newUser) => {
		res.json(newUser);
		newUser.save();
	});
});

//To find user by ID -- works
router.get('/:userID', (req, res) => {
	let userID = req.params.userID;
	console.log(userID);
	UserModel.findOne({ _id: userID }).then((user) => {
		res.json(user);
	});
});

//To Delete A User -- works
router.delete('/:userID', (req, res) => {
	UserModel.deleteOne({ _id: req.params.userID }).then((deleted) => {
		res.json(deleted);
	});
});

//To Find All Users - works
router.get('/', (req, res) => {
	UserModel.find({}).then((allusers) => {
		res.json(allusers);
	});
});


module.exports = router;
