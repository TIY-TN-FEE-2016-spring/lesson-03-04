'use strict';

/**
 * Takes a string of an actor we want to look up
 *   and a function that says how to look up movies for that actor
 *   if the actor is good, log their movies to the console
 *
 * @param  String actor
 * @param  Function getMovieNames A function that can be called
 *   to look up the movies for an actor (may accept a new movie title too)
 * @return undefined
 */
function onlyGoodMovies(actor, getMovieNames) {
  // Check if the actor is Nic Cage
  if (actor === `Nic Cage`) {
    console.log(`We don't serve your kind in these parts`);

    // Never lookup Nic Cage's movies
    return undefined;
  }

  if (actor === `Nicholas Cage`) {
    console.log(`Don't you think you're clever?`);

    return undefined;
  }

  // Look up movie names using the 'getMovieNames' callback
  const listOfMovies = getMovieNames(`Star Wars: Force Awakens`);
  console.log(listOfMovies);
}

onlyGoodMovies(`Nic Cage`, function () {
  return [
    `National Treasure`, `Conair`, `Ghost Rider`,
    `Face Off`, `Sorcerers Apprentence`];
});

onlyGoodMovies(`Mark Hamill`, function (newMovie) {
  console.log(`We all like Mark Hamill movies`);

  return [`Star Wars`, `Star Wars: Empire Strikes Back`, newMovie];
});
