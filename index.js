const express = require('express');
const app = express();
const parser = require('body-parser');
const recipeController = require('./controllers/recipeController');
const userController = require('./controllers/userController');

const cors = require('cors');

app.use(parser.json());
app.use(cors());



app.use('/api/foodie/', userController);
app.use('/api/foodie/recipes/', recipeController);

app.set('port', process.env.PORT || 3001);

app.listen(app.get('port'), () => {
	console.log(`✅ PORT: ${app.get('port')} 🌟`);
});

