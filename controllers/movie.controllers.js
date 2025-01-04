import Movie from '../models/movies.models.js'


export const movieIndex = async (req,res) => {
    try {
        const movieList = await Movie.find();
        return res.status(200).json(movieList);
    } catch (error) {
        return res.status(400).json({message : error.message})
    }
}


export const singleMovie = async (req,res) => {
    try {
        const singleMovie = await Movie.findById(req.params.id);
        return res.status(200).json(singleMovie);
    } catch (error) {
       return res.status(400).json({message : error.message}) 
    }
}


export const movieCreator = async (req,res) => {
    const title = req.body.title
    const desc = req.body.desc
    const newMovie = new Movie({title : title, desc : desc});
    try {
        await newMovie.save();
        return res.status(200).json(newMovie);  
    } catch (error) {
        return res.status(404).json({message : error.message})
    }
}


export const movieUpdator = async (req,res) => {
    try {
        const updatedMovie = await Movie.findOneAndUpdate(
            {_id : req.params.id}, 
            {
                title : req.body.title,
                desc : req.body.desc
            }, 
            {
                new : true
            }
        )
        return res.status(200).json(updatedMovie);
    } catch (error) {
        return res.status(400).json({message : error.message})
    }
}


export const movieDeletor = async (req,res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        await movie.deleteOne();
        const movieList = await Movie.find();
        return res.status(200).json(movieList)
    } catch (error) {
        return res.status(400).json({message : error.message})
    }
}