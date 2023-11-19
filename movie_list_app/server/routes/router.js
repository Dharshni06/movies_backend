const express = require('express');
const { GetAllMovie,FilterMovie,UpdateMovie,SearchMovie,DeleteMovie,AddMovie,CountByLang, Sort} = require('../controller/movieController');

const route = express.Router(); //allows to create different router in a separate file

//get movies
route.get('/get',GetAllMovie);

//add movie
route.post('/add',AddMovie);

// Update movie Details
route.put("/update/:id",UpdateMovie);

// Search movie name
route.get("/search/:movieName", SearchMovie);

// Delete movie
route.delete("/delete/:id", DeleteMovie);

//filter specific details
route.get('/filter',FilterMovie);

//count by Language
route.get("/countLanguage/:lang", CountByLang);

//sorting
route.get("/sort", Sort);

module.exports = route;

