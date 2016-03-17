'use strict';

/**
 * Takes a string of an actor we want to look up
 *   and a function that says how to look up movies for that actor
 *   if the actor is good, log their movies to the console
 * @param  String actor
 * @param  Function getMovieNames A function that can be called
 *   to look up the movies for an actor (may accept a new movie title too)
 * @return undefined
 */
function onlyGoodMovies(actor, getMovieNames) {
  if (actor === `Nic Cage`) {
    window.alert(`We don't serve your kind in these parts`);

    // Never lookup Nic Cage's movies
    return;
  }

  // Look up movie names using the 'getMovieNames' callback
  const listOfMovies = getMovieNames(`Star Wars: Force Awakens`);
  console.log(listOfMovies);
}

onlyGoodMovies(`nic cage`, function () {
  return [
    `National Treasure`, `Conair`, `Ghost Rider`,
    `Face Off`, `Sorcerers Apprentence`];
});

onlyGoodMovies(`Mark Hamill`, function (newMovie) {
  console.log(`We all like Mark Hamill movies`);

  return [`Star Wars`, `Star Wars: Empire Strikes Back`, newMovie];
});
