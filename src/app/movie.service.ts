import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  moviesList = [
    { title: 'Jurassic Park', year: "1993", director: 'Steven Spielberg'},
    { title: 'Shin Godzilla', year: "2016", director: 'Hideaki Anno'},
    { title: 'Alien', year: "1979", director: 'Ridley Scott'},
    { title: 'Top Gun', year: "1986", director: 'Tony Scott'}
  ];

  getMovies() {
    return this.moviesList;
  }

  addMovie(movietitle:string, moviedirector:string, movieyear:string) {
    this.moviesList.push({title:movietitle, director:moviedirector, year:movieyear});
  }
}
