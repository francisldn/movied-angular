import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Movie } from './movie';
import { HttpClient } from '@angular/common/http';
import {Genre} from './genre';
import { map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  constructor(private httpClient:HttpClient) { }
  
  private moviesBaseURL:string = "http://movied.herokuapp.com/discover/";
  private movieBaseURL:string = "http://movied.herokuapp.com/movie/"
  private categoriesURL:string="http://movied.herokuapp.com/categories"

  getMovies():Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(this.moviesBaseURL)
  }

  getMovie(id:number): Observable<Movie> {
    return this.httpClient.get<Movie>(`${this.movieBaseURL}${id}`)
  }
  
  getCategories(): Observable<Genre[]> {
    return this.httpClient.get<Genre[]>(`${this.categoriesURL}`)
  }

  getMoviesByCategory(categoryId:number):Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(`${this.categoriesURL}/${categoryId}`)
  }
  // getMoviesByCategory(id:number): Observable<Movie[]> {
  //   return this.httpClient.get<Movie[]>(`${this.categoriesURL}${id}`)
  // }

}
