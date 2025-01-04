import express from 'express';
import {movieIndex, 
        singleMovie, 
        movieCreator, 
        movieUpdator, 
        movieDeletor} from '../controllers/movie.controllers.js'

const router = express.Router();

router.get('/', movieIndex);


router.get('/:id', singleMovie);


router.post('/', movieCreator);


router.put('/:id', movieUpdator);


router.delete('/:id', movieDeletor);

export default router;