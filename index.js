const express = require('express');
const app = express();
const parser = require('body-parser');
const cors = require('cors');

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use(cors());

const userController = require('./controllers/userController');
const recipeController = require('./controllers/recipeController');

app.use('/api/foodie/', userController);
app.use('/api/foodie/recipes/', recipeController);

app.set('port', process.env.PORT || 3001);

app.listen(app.get('port'), () => {
	console.log(`✅ PORT: ${app.get('port')} 🌟`);
});

