import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http: HttpClient) { 

  }

  all(cb){
    this.http.get("/api/reviews")
    .subscribe( data => cb(data));
  }

  create(data,cb){
    this.http.post("/api/reviews",data)
    .subscribe( data => cb(data) );
  }

}
