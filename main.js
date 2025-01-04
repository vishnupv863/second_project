import express from 'express';
import movieRouter from './routes/movie.routes.js';
import connectDB from './lib/db.js'

// creating express app
const app = express();

// adding port number
const PORT = 3000;

// middileware for database connection
connectDB();

// middileware for json
app.use(express.json());

// home page code
app.get('/', (req,res) => {
    res.send('this is home page')
});

//middile for routes
app.use('/movies', movieRouter)



// code for port listening
app.listen(PORT, () => {
    console.log(`server started running at localhost http://localhost:${PORT}`);
});