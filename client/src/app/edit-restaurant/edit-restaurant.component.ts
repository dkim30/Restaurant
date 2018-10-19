import { Component, OnInit } from '@angular/core';
import {RestaurantService} from "../restaurant.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-edit-restaurant',
  templateUrl: './edit-restaurant.component.html',
  styleUrls: ['./edit-restaurant.component.css']
})
export class EditRestaurantComponent implements OnInit {

  private restaurant: any;

  constructor(private restaurantService: RestaurantService, private router: Router) { }

  ngOnInit() {
    this.initRestaurant();
  }

  initRestaurant(){
    this.restaurant = {

    };
  }

  update( $event ){
    this.restaurantService.update( this.restaurant, ( data )=>{
        if(data.errors){
            this.restaurant.errors = data.errors;
        }else{
            this.router.navigateByUrl("/restaurants/"+data._id);
        }
    });
    this.initRestaurant();
    $event.preventDefault();
}

}
