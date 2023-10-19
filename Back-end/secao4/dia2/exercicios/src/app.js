const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();
app.use(express.json());

const moviesFile = path.resolve(__dirname, './movies.json');

const readFile = async () => {
    try {
        const data = await fs.readFile(moviesFile);
        return JSON.parse(data)
    } catch (error) {
        console.error(`Arquivo não pôde ser lido: ${error}`)
    }
}

app.get('/movies/:id', async (req, res) => {
   try {
        const movies = await readFile();
        const movie = movies.find(({ id }) => id === Number(req.params.id));
    res.status(200).json(movie)
    } catch (error) {
    res.status(500).send({ message: error.message});
    }
});

app.get('/movies', async (req, res) => {
    try {
        const movies = await readFile();
        res.status(200).json(movies)
    } catch (error) {
    res.status(500).send({ message: error.message});
    }
})

app.post('/movies', async (req, res) => {
    try {
        const { movie, price } = req.body;
        const movies = await readFile();
        
        const newMovie = {
            id: movies[movies.length -1].id +1,
            movie,
            price,
          };
        const allMovies = JSON.stringify([...movies, newMovie]);
        await fs.writeFile(moviesFile, allMovies)
        res.status(201).json(newMovie);
    } catch (error) {
        res.status(500).send({ message: error.message})
    }
})

module.exports = app;