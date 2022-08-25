import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movielistitem',
  templateUrl: './movielistitem.component.html',
  styleUrls: ['./movielistitem.component.css']
})
export class MovielistitemComponent implements OnInit {
  @Input()
  movieImg!: string;
  @Input()
  movieTitle!: string;

  baseUrl = `https://image.tmdb.org/t/p/w300/`
  constructor() { }

  ngOnInit(): void {
  }
}
