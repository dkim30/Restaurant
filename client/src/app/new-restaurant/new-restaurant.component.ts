import { Component, OnInit } from '@angular/core';
import {RestaurantService} from "../restaurant.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-new-restaurant',
  templateUrl: './new-restaurant.component.html',
  styleUrls: ['./new-restaurant.component.css']
})
export class NewRestaurantComponent implements OnInit {

  private restaurant:any;

    constructor(private restaurantService:RestaurantService, private router:Router ){}

    ngOnInit(){
        this.initRestaurant();
    }

    initRestaurant(){
        this.restaurant = {
          
        };
    }

    create( $event ){
        this.restaurantService.create( this.restaurant, ( data )=>{
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
