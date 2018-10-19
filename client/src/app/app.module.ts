import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { RestaurantService } from "./restaurant.service";
import { ReviewService } from "./review.service";
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { NewRestaurantComponent } from './new-restaurant/new-restaurant.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { EditRestaurantComponent } from './edit-restaurant/edit-restaurant.component';
import { NewReviewComponent } from './new-review/new-review.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantsComponent,
    NewRestaurantComponent,
    ReviewsComponent,
    EditRestaurantComponent,
    NewReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    RestaurantService,
    ReviewService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
