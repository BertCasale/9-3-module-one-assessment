/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleMovies` variable below to gain access to an array of movies.

  Keep in mind that your functions must still have and use a parameter for accepting all movies.
*/
const exampleMovies = require("./movies");
// Do not change the line above.

/**
 * getAllMovieTitles()
 * -----------------------------
 * Returns all of titles from an array of movies. If the inputted `movies` array is empty, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string[]} An array of strings, which are movie titles.
 *
 * EXAMPLE:
 *  getAllMovieTitles(movies);
 *  //> [
      "Toy Story 4",
      "Inside Out",
      "Coco",
      "Incredibles 2",
      "Moana",
      "How to Train Your Dragon",
      "Paddington",
      "The Lion King",
      "Fantasia",
      "James and the Giant Peach",
    ];
 */
function getAllMovieTitles(movies) {
  //create empty array
  let movieTitles = [];
  //loop through the movies array
  for (let movie of movies){
    //push the title to the empty array
    movieTitles.push(movie.title);
  }
  //return the titles array
  return movieTitles;
}

/**
 * getHighestMetascore()
 * -----------------------------
 * Returns the highest `metascore` among all movies. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The highest `metascore` of all movies.
 *
 * EXAMPLE:
 *  getHighestMetascore(movies);
 *  //> 96
 */
function getHighestMetascore(movies) {
  //create a comparison variable
  let highestRating = 0;
  //loop through the movies array
  for (let movie of movies){
    //compare the highest rating to the next movie
    if (highestRating < movie.metascore){
      //make the movies score the new highest score, after changing it from a string to a number
      highestRating = Number(movie.metascore);
    }
  }
  //return the highest rating
  return highestRating;
}

/**
 * getAverageIMDBRating()
 * -----------------------------
 * Averages all of the IMDB ratings from all movies and returns it, as a number. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The average IMDB rating across all movies.
 *
 * EXAMPLE:
 *  getAverageIMDBRating(movies);
 *  //> 7.76
 */
function getAverageIMDBRating(movies) {
  //create a variable for the rating
  let averageRating = 0;
  //create a counter variable
  let count = 0;
  //loop through the movie array
  while (count < movies.length){
    //add the movies score to the average variable
    averageRating += Number(movies[count].imdbRating);
    //add to the counter
    count ++;
  }
  //if there was at least one movie
  if (count > 0){
    //divide the number of movies from the average variable
    averageRating = averageRating / count;
  }
  
  //return the average
  return averageRating;
}

/**
 * countByRating()
 * -----------------------------
 * Returns an object where the keys are movie ratings and the values are the number of movies in the array with that rating. If the inputted `movies` array is empty, return `{}`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {Object} An object where keys are movie ratings (e.g. "PG") and the values are how many movies in the array have that rating (e.g. 7).
 *
 * EXAMPLE:
 *  countByRating(movies);
 *  //> { G: 3, PG: 7 }
 */
function countByRating(movies) {
  //create empty object
  let ratingObj = {};
  //loop through the movies array
  for (let movie of movies){
    //check if that movies rating exists yet in the new object
    if (ratingObj[movie.rated]){
      //add to the count
      ratingObj[movie.rated] ++;
    } else {
      //otherwise create the new key with a value of 1
      ratingObj[movie.rated] = 1;
    }
  }
  //return the rating object
  return ratingObj;
}

/**
 * findById()
 * -----------------------------
 * Returns a movie object from an array of objects based on the ID. If the inputted `movies` array is empty or the ID does not match any movie, return `null`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} id - A unique `imdbID`.
 * @returns {Object|null} The movie object with the matching `imdbID`.
 *
 * EXAMPLE:
 *  findById(movies, "tt1979376");
 *  //> {
      // Toy Story 4
    };
 */
function findById(movies, id) {
  //loop through the movies
  for (let movie of movies){
    //check if the id matches 
    if (id === movie.imdbID){
      //return the found movie
      return movie;
    }
  }
  //return null otherwise
  return null;
}

/**
 * filterByGenre()
 * -----------------------------
 * Returns all movie objects with a matching genre. Case-insensitive. If the inputted `movies` array is empty or no movies match the inputted `genre`, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} genre - The genre of a movie. (e.g. "Fantasy")
 * @returns {Object[]} An array of movies where at least one of the genres matches the `genre` inputted.
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Mystery");
 *  //> [
      {
        // Coco
      }
    ]
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Horror")
 *  //> []
 */
function filterByGenre(movies, genre) {
  //create an empty array
  let moviesOfGenre = [];
  //make the input genre match the captialization in the movies genre string
  genre = genre[0].toUpperCase() + genre.slice(1).toLowerCase();
  //loop through the movies array
  for (let movie of movies){
    //check if the movie has the genre
    if (movie.genre.includes(genre)){
      //push the movie into the new array
      moviesOfGenre.push(movie);
    }
  }
  //return the new array
  return moviesOfGenre;
}

/**
 * getAllMoviesReleasedAtOrBeforeYear()
 * -----------------------------
 * Returns all movie objects with a `released` year equal to or less than the given year.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {number} year - A year as a number. (e.g. 2000)
 * @returns {Object[]} An array of movies where the `released` year is equal to or less than the inputted year.
 *
 * EXAMPLE:
 *  getAllMoviesReleasedAtOrBeforeYear(movies, 2000);
 *  //> [
      {
        // The Lion King
      },
      {
        // Fantasia
      },
      {
        // James and the Giant Peach
      }
    ];
 */
function getAllMoviesReleasedAtOrBeforeYear(movies, year) {
  //create an empty array
  let moviesReleased = [];
  //loop through the movies array
  for (let movie of movies){
    //check if the movie was released before or during the year
    //get just the year released and convert to a number
    if (year >= Number(movie.released.slice(movie.released.length - 4))){
      //push the movie to the new array
      moviesReleased.push(movie);
    }
  }
  //return the new array
  return moviesReleased;
}

/**
 * getBiggestBoxOfficeMovie()
 * -----------------------------
 * Returns the name of the movie with the highest `boxOffice` amount.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string} The name of the movie that made the most money at the box office.
 *
 * EXAMPLE:
 *  getBiggestBoxOfficeMovie(movies);
 *  //> "Incredibles 2"
 */
function getBiggestBoxOfficeMovie(movies) {
  //create a variable for the biggest box office movies title, null if movies array is empty
  let biggestBoxOffice = null;
  //create a variable for the value of the money made by the biggest box office movie
  let biggestDollar = 0;
  //loop through the movies array
  for (let movie of movies){
    //check if the biggest amount is less than the current movie
    //remove dollar sign, split the dollar amounts everywhere thers a comma, then join and convert to number
    if (biggestDollar < Number(movie.boxOffice.slice(1).split(",").join(""))){
      //biggest dollar amount is now of that movie
      biggestDollar = Number(movie.boxOffice.slice(1).split(",").join(""));
      //biggest Box office variable is now the current movies title
      biggestBoxOffice = movie.title;
    }
  }
  //return the biggest box office movie title
  return biggestBoxOffice;
}

// Do not change anything below this line.
module.exports = {
  getAllMovieTitles,
  getHighestMetascore,
  getAverageIMDBRating,
  countByRating,
  findById,
  filterByGenre,
  getAllMoviesReleasedAtOrBeforeYear,
  getBiggestBoxOfficeMovie,
};
