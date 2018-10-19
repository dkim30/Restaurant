import { Component, OnInit } from '@angular/core';
import {ReviewService} from "../review.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-new-review',
  templateUrl: './new-review.component.html',
  styleUrls: ['./new-review.component.css']
})
export class NewReviewComponent implements OnInit {

  private review: any;

  constructor(private reviewService: ReviewService, private router: Router ) { }

  ngOnInit() {
      this.initReview();
  }

  initReview(){
      this.review = {

      };
  }

  create( $event ){
    this.reviewService.create( this.review, ( data )=>{
        if(data.errors){
            this.review.errors = data.errors;
        }else{
            this.router.navigateByUrl("/restaurants/"+data._id);
        }
    });
    this.initReview();
    $event.preventDefault();
}


}
