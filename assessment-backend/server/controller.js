const movieDb = [
    {
        id: 1,
        title: "The Watch",
        director: "Akiva Schaffer",
        releaseYear: 2012,
    },
    {
        id: 2,
        title: "Pineapple Express",
        director: "David Gordon Green",
        releaseYear: 2008,
    },
    {
        id: 3,
        title: "Piranha 3D",
        director: "Alexandre Aja",
        releaseYear: 2010,
    },
    {
        id: 4,
        title: "Bloody Valentine movie",
        director: "Patrick Lussier",
        releaseYear: 2009,
    }
]
let movieId = 5;
const fortune = ['A beautiful, smart, and loving person will be coming into your life.', 'A dubious friend may be an enemy in camouflage.', 'A faithful friend is a strong defense.', 'A fresh start will put you on your way.', 'A friend is a present you give yourself.'];


module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    // fortune cookie get request here
    getRandomFortune:(req, res) => {

        let randomFortune = Math.floor(Math.random() * fortune.length);
        let yourFortune = fortune[randomFortune];

        res.status(200).send(yourFortune); 
    },
    // get all movies here
    getAllMovies: (req, res) => {
        res.status(200).send(movieDb);
    },

    // post a movie here
    uploadMovie: (req, res) => {
        const {title, director, releaseYear} = req.body;
            let newMovie = {
                id: movieId,
                title,
                director,
                releaseYear
            };
            movieDb.push(newMovie);
            res.status(200).send(movieDb);
            movieId++
    },

    // delete a movie here
    deleteMovie: (req, res) => {
        let {id} = req.params;
        let index = movieDb.findIndex((pelicula) => pelicula.id === +id);
        if(index === -1) {
            res.status(400).send('movie not found');
            console.error();
            return;
        }
        // delete the object from the db
        movieDb.splice(index, 1);
        res.status(200).send(movieDb);
    },

    // update movie here
    editMovie: (req, res) => {
        let {id} = req.params;
        let {newTitle, newDirector, newReleaseYear} = req.query;
        // use the id to locate the object
        let index = movieDb.findIndex((pelicula) => pelicula.id === +id);
        if(index === -1) {
            res.status(400).send('movie not found');
            console.error();
            return;
        }
        movieDb[index].title = newTitle;
        movieDb[index].director = newDirector;
        movieDb[index].releaseYear = newReleaseYear;
        // const updatedObj = {
            //     id: index,
        //     title,
        //     director,
        //     releaseYear
        // };
        // movieDb.map((movie) => movie = index[updatedObj]);
        res.status(200).send(movieDb);
    }

}