import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
// routes array for navigation
const routes: Routes = [
  {path: '', redirectTo:'/dashboard', pathMatch:'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: ':movieId', component: MovieDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
