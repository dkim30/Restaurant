import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor( private http: HttpClient) { 

  }

  all(cb){
    this.http.get("/api/restaurants")
    .subscribe( data => cb(data));
  }

  findById(id,cb){
    this.http.get("/api/restaurants/"+id)
    .subscribe( data => cb(data) );        
  }

  create(data,cb){
    this.http.post("/api/restaurants",data)
    .subscribe( data => cb(data) );
  }

  update(restaurant,cb){
    this.http.patch("/api/restaurants/"+restaurant._id,restaurant)
    .subscribe( data => cb(data) );        
  }

  destroy(id,cb){
    this.http.delete("/api/restaurants/"+id)
    .subscribe( data => cb( data ) )
  }
}
