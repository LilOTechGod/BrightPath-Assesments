const complimentBtn = document.getElementById("complimentButton")
// variable for fortune button
const fortuneBtn = document.getElementById('fortuneButton');
// variables for get request on all movies
const displayMovies = document.querySelector('#populateMovie')
// variables for the add a movie input
const newTitle = document.getElementById('newTitle');
const newDirector = document.getElementById('newDirector');
const newReleaseYear = document.getElementById('newReleaseYear');
const addMovieForm = document.getElementById('add-movie')
// variables for the update a movie input
const updateMovieForm = document.getElementById('update-movie');
const movieId = document.getElementById('movie-id');
const updateTitle = document.getElementById('update-title');
const updateDirector = document.getElementById('update-director');
const updateReleaseYear = document.getElementById('update-releaseYear');


// created card in div for section
createMovieCard = (movieArr) => {
    displayMovies.innerHTML=''
    movieArr.map(movie => {
        const holdingDiv = document.createElement('div');
        holdingDiv.innerHTML=  `
             <ul>
                <li>${movie.id}</li>
                <li>${movie.title}</li>
                <li>By Director: ${movie.director}</li>
                <li>Released In ${movie.releaseYear}</li>
                <button onclick="deleteMovie(${movie.id})"> Delete </button>
             </ul>`

             displayMovies.appendChild(holdingDiv)
    })
    
}

// axios get request all movies will populate when page loads
const getAllMovies = () => {

    axios.get('http://localhost:4000/api/movies/')
    .then(res => {
        console.log(res.data);
        createMovieCard(res.data)
    })
    .catch(err => console.error(err));
}

document.addEventListener('DOMContentLoaded',getAllMovies)

// add a movie to my page
const uploadMovie =(e) => {
    e.preventDefault();

    const formBody = {
        title:newTitle.value,
        director:newDirector.value,
        releaseYear:newReleaseYear.value
    }
    axios.post('http://localhost:4000/api/movies', formBody)
    .then(res => createMovieCard(res.data))
    .catch(err => console.error(err))
    newTitle.value=''
    newDirector.value=''
    newReleaseYear.value=''
}

addMovieForm.addEventListener('submit', uploadMovie)

// update a movie from my page
const editMovieHandler = (e) => {
    e.preventDefault()
    axios.put(`http://localhost:4000/api/movies/${movieId.value}?newTitle=${updateTitle.value}&newDirector=${updateDirector.value}&newReleaseYear=${updateReleaseYear.value}` )
    .then(res => createMovieCard(res.data))
    .catch(err => console.error(err))

}
updateMovieForm.addEventListener('submit', editMovieHandler);

// delete a movie from clicking the button in my front end
const deleteMovie = (id) => {
    axios.delete(`http://localhost:4000/api/movies/${id}`)
    .then(res => createMovieCard(res.data))
    .catch(err => console.error(err))
}

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

// axios request for fortune on the front end to fetch data from the back end
const getRandomFortune = () => {
    axios.get('http://localhost:4000/api/fortuneCookie/')
    .then(res => {
        const data = res.data;
        alert(data);
    })
}

// addeventlistener for when the button is clicked
fortuneBtn.addEventListener('click', getRandomFortune);