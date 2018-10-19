import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantsComponent } from './restaurants/restaurants.component';
import { NewRestaurantComponent } from './new-restaurant/new-restaurant.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { EditRestaurantComponent } from './edit-restaurant/edit-restaurant.component';
import { NewReviewComponent } from './new-review/new-review.component';

const routes: Routes = [
  {path:"restaurants", component:RestaurantsComponent},
  {path:"restaurants/new", component:NewRestaurantComponent},
  {path:"restaurants/:id", component: ReviewsComponent},
  {path:"restaurants/:id/edit", component:EditRestaurantComponent},
  {path:"restaurants/:id/review", component:NewReviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
