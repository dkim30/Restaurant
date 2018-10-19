import { Component, OnInit } from '@angular/core';
import { RestaurantService } from "../restaurant.service";

@Component({
    selector: 'app-restaurants',
    templateUrl: './restaurants.component.html',
    styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
    private restaurants: any;

    constructor( private restaurantService: RestaurantService ) { 

    }

    ngOnInit() {
        this.restaurantService.all( (data)=>this.restaurants = data);

    }

    

}
