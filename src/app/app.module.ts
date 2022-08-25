import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MovielistComponent } from './movielist/movielist.component';
import { MovielistitemComponent } from './movielistitem/movielistitem.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    MovielistComponent,
    MovielistitemComponent,
    MovieDetailComponent,
  ],
  imports: [
  
  BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
