import express from 'express';
import {movieIndex, 
        singleMovie, 
        movieCreator, 
        movieUpdator, 
        movieDeletor} from '../controllers/movie.controllers.js'

const app = express.Router();

app.get('/', movieIndex);


app.post('/', movieCreator);


app.put('/:id', movieUpdator);


app.delete('/:id', movieDeletor);