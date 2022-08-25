import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiClientService } from '../api-client.service';
import { Movie } from '../movie';
@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  movie:Movie =
  {
    adult: false,
    backdrop_path: '',
    genres: [],
    id: 0,
    original_language: '',
    original_title: '',
    overview: '',
    popularity: 0,
    poster_path: '',
    release_date: '',
    title: '',
    video: false,
    vote_average: 0,
    vote_count: 0,
    runtime: 0,
    homepage:''
  };
  movieGenres:string[] = []

  constructor(
    private apiClientService: ApiClientService,
    private route: ActivatedRoute
  ){}
  
  ngOnInit(){
    this.getMovie(),
    this.getMovieGenres()
  }
  baseUrl = `https://image.tmdb.org/t/p/w300/`

  getMovie():void {
    const id = Number(this.route.snapshot.paramMap.get('movieId'));
    this.apiClientService.getMovie(id)
    .subscribe(movie => {
      this.movie = movie
    });
  }

  getMovieGenres():void {
    const id = Number(this.route.snapshot.paramMap.get('movieId'));
    this.apiClientService.getMovie(id)
    .subscribe(movie => this.movieGenres = movie.genres!.map(genre => genre.name))
  }

  // getCategories():void {
  //   this.api
  // }

}
