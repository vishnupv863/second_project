import { model, Schema } from "mongoose";


const schema = new Schema({
    title : {
        type : String,
        unique : true,
        required : true
    },
    desc : {
        type : String,
        required : true
    }
});

const Movie = model("Movie", schema);

export default Movie;