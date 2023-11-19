const movies = require("../model/moviesSchema");

//Get All movies
const GetAllMovie = async (req, res) => {
    try {
        const data = await movies.find();
        //res.send(data);
        res.json({
            Status: "Success",
            CountByLangount: data.length,
            Data : data
        })
    } catch (err) {
        console.log(err);
        res.json({
            Error : err
        }) 
    }
}

//Add new movies
const AddMovie = async (req, res) => {
    try {
        const { MovieName, Director, Genre,Release_year, Language, Rating } = req.body;
        const details = await movies.create({ MovieName, Director ,Genre,Release_year, Language, Rating });
        res.json({
            Status: "Success",
            Data : details
        })
    } catch (err) {
        console.log(err);
        res.json({
            Error : err
        })        
    }
}

//update movies
const UpdateMovie = async (req, res) => {
    try {
        const id = req.params.id;
        const { MovieName, Director ,Genre,Release_year, Language, Rating } = req.body;
        const mov = await movies.findById(id);
        console.log(mov);
        if(mov===null){
            res.json({
                Status: "No movie Found"
            })
        }
        else{
            const update = await movies.findByIdAndUpdate(id, {
                MovieName, 
                Director,
                Genre,
                Release_year, 
                Language, 
                Rating 
            }, {
                new: true,
                runValidators: true
            });
            
            res.json({
                Status: "Updated",
                Data : update
            })
        }
    } catch (error) {
        console.log(error);
        res.json({
            Status: "Failed",
            Error: error.message
        });
    }
}


//Search moviesName
const SearchMovie = async (req, res) => {
    try {
        const name = req.params.movieName;
        const details = await movies.find({MovieName: `${name}`});
        if(details.length===0){
            res.json({
                Status: "No Movies Found"
            })
        }
        else{
            res.json({
                Status: "Success",
                Count: details.length,
                Data : details
            })
        }
    } catch (error) {
        res.json({
            Status: "Failed",
            Error : error
        })
    }
}

//Delete movies
const DeleteMovie = async (req, res) => {
    try {
        const id = req.params.id;
        const removed = await movies.findByIdAndDelete(id);
        res.json({
        Status: "Deleted",
        Data : removed
    })
    } catch (error) {
        res.json({
            Status: "Failed",
            Error : error
        })
    }
}


//Filter by query
const FilterMovie = async (req, res) => {
    try {
        const data = await movies.find(req.query);
        if(data.length===0){
            res.json({
                Status: "No Record Found"
            })
        }
        else{
            res.json({
                Status: "Success",
                Count: data.length,
                Data : data
            })
        }
    } catch (err) {
        console.log(err.message);
        res.json({
            Error : err.message
        }) 
    }
}

//Get count for language
const CountByLang = async (req, res) => {
    try {
        const name = req.params.lang;
        const details = await movies.find({Language: `${name}`});
        res.json({
            Status: "Success",
            Language : name,
            Count: details.length
        })
    } catch (error) {
        res.json({
            Status: "Failed",
            Error : error
        })
    }
}

//Sort by query
const Sort = async (req, res)=>{
    try{
        const str = req.query.sort.split(',').join(' ');
        const data = await movies.find().sort(str);
        res.json({
            Status: "Success",
            Data: data
        })
    }
    catch (error) {
        res.json({
            Status: "Failed",
            Error : error
        })
    }
}

module.exports = {
    AddMovie, 
    GetAllMovie,
    FilterMovie, 
    UpdateMovie, 
    SearchMovie, 
    DeleteMovie, 
    CountByLang, 
    Sort
}