const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// deconstruction all my handler functions from controllers
const { getCompliment, getRandomFortune, getAllMovies, uploadMovie, deleteMovie, editMovie } = require('./controller')

// api routes
app.get("/api/compliment", getCompliment);
app.get('/api/fortuneCookie', getRandomFortune);
app.get('/api/movies', getAllMovies);
app.post('/api/movies', uploadMovie);
app.delete('/api/movies/:id', deleteMovie);
app.put('/api/movies/:id', editMovie);

// pseudocode 
app.listen(4000, () => console.log("Server running on 4000"));
