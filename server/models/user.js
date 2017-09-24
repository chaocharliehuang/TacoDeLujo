var mongoose = require('mongoose');

var RecipeSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 2, maxlength: 256},
    text: {type: String, required: true, minlength: 10, maxlength: 256}
}, {timestamps: true});

mongoose.model('Recipe', RecipeSchema);