var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Recipe = mongoose.model('Recipe');

module.exports = {
    showAll: function(req, res) {
        Recipe.find({}).sort('-createdAt').exec(function(err, recipes) {
            if (!err) {
                return res.json(recipes);
            }
        });
    },
    addRecipe: function(req, res) {
        var recipe = new Recipe({
            author: req.body.author,
            text: req.body.text
        });
        recipe.save(function(err) {
            if (!err) {
                return res.json(recipe);
            }
        });
    }
}