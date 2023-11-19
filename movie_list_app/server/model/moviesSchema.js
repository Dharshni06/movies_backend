const mongoose = require('mongoose');

//schema
const movieSchema = new mongoose.Schema({
    MovieName: {
        type: String,
        required: true,
    },
    Director:  {
        type: String,
        required: true,
    },
    Genre: {
        type:[String],
        required: true
    },
    Release_year :  {
        type: Number,
        required: true,
    },
    Language : {
        type: String,
        required: true,
    },
    Rating :  {
        type: Number,
        required: true,
    }
},{
    timestamps: true,
})

//model
const Movies = mongoose.model("Movie-List", movieSchema);

module.exports = Movies;