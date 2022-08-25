import { Component, OnInit } from '@angular/core';
import { ApiClientService } from '../api-client.service';
import {Movie} from '../movie'
import { Genre } from '../genre';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})

export class MovielistComponent implements OnInit {
  
  movies:Movie[] = [];
  boxOffice:Movie[] = []; // discover
  comedyMovies:Movie[] = []; 
  actionMovies:Movie[]=[]; 
  animationMovies:Movie[] = []; 
  crimeMovies:Movie[] = []; 
  documentaryMovies:Movie[]=[];
  dramaMovies:Movie[]=[]

  crimeId:number = 0;
  comedyId:number = 0;
  actionId:number=0;
  animationId: number=0;
  documentaryId: number=0;
  dramaId: number = 0;
  
  constructor(private apiClientService: ApiClientService){}
  
  ngOnInit(){
    this.getMovies()
    this.getCrimeMovies();
    this.getComedyMovies();
    this.getActionMovies();
    this.getAnimationMovies();
    this.getDocumentaryMovies();
    this.getDramaMovies();
  }

  getMovies():void {
    this.apiClientService.getMovies()
    .subscribe(movies => this.boxOffice = movies)
  }
  
  getCrimeMovies():void {
    this.apiClientService.getCategories()
    .subscribe(genres => {
      this.crimeId = genres.filter(genre => genre.name === "Crime")[0].id
        this.apiClientService.getMoviesByCategory(this.crimeId)
        .subscribe(movies => this.crimeMovies = movies);
    })
  }

  getComedyMovies():void {
    this.apiClientService.getCategories()
    .subscribe(genres => {
      this.comedyId = genres.filter(genre => genre.name === "Comedy")[0].id
        this.apiClientService.getMoviesByCategory(this.comedyId)
        .subscribe(movies => this.comedyMovies = movies);
    })
  }

  getActionMovies():void {
    this.apiClientService.getCategories()
    .subscribe(genres => {
      this.actionId = genres.filter(genre => genre.name === "Action")[0].id
        this.apiClientService.getMoviesByCategory(this.actionId)
        .subscribe(movies => this.actionMovies = movies);
    })
  }

  getAnimationMovies():void {
    this.apiClientService.getCategories()
    .subscribe(genres => {
      this.animationId = genres.filter(genre => genre.name === "Animation")[0].id
        this.apiClientService.getMoviesByCategory(this.animationId)
        .subscribe(movies => this.animationMovies = movies);
    })
  }

  getDocumentaryMovies():void {
    this.apiClientService.getCategories()
    .subscribe(genres => {
      this.documentaryId = genres.filter(genre => genre.name === "Documentary")[0].id
        this.apiClientService.getMoviesByCategory(this.documentaryId)
        .subscribe(movies => this.documentaryMovies = movies);
    })
  }

  getDramaMovies():void {
    this.apiClientService.getCategories()
    .subscribe(genres => {
      this.dramaId = genres.filter(genre => genre.name === "Drama")[0].id
        this.apiClientService.getMoviesByCategory(this.dramaId)
        .subscribe(movies => this.dramaMovies = movies);
    })
  }

}
