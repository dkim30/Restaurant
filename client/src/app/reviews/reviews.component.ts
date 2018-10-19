import { Component, OnInit } from '@angular/core';
import { ReviewService } from "../review.service";

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  private review: any;

  constructor(private reviewService : ReviewService) {

  }

  ngOnInit() {

    this.reviewService.all((data)=>this.review = data);
  }

}
