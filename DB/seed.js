
const UserModel = require('./models/userModel');

const userData = require('../db/user.json');

UserModel.remove({}).then(() => {
	userData.map((user) => {
		UserModel.create(user).then((newUser) => {
			console.log(newUser);
		});
	});
});
