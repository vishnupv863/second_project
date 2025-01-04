import express from 'express';

// creating express app
const app = express();

// adding port number
const PORT = 3000;

// home page code
app.get('/', (req,res) => {
    res.send('this is home page')
});

// code for port listening
app.listen(PORT, () => {
    console.log(`server started running at localhost http://localhost:${PORT}`);
});