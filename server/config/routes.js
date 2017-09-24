var recipes = require('../controllers/recipes.js');
var path = require('path');

module.exports = function(app) {
    app.get('/recipes', function(req, res) {
        recipes.showAll(req, res);
    });

    app.post('/recipes', function(req, res) {
        recipes.addRecipe(req, res);
    });

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/index.html"));
    });
}