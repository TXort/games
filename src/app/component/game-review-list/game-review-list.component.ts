import {Component, Input} from '@angular/core';
import {Review} from "../../models/review.model";
import {ReviewService} from "../../service/review.service";
import {MatCard} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {MatMenu, MatMenuTrigger} from "@angular/material/menu";

@Component({
  selector: 'app-game-review-list',
  standalone: true,
  imports: [
    MatCard,
    MatIcon,
    MatMenu,
    MatMenuTrigger
  ],
  templateUrl: './game-review-list.component.html',
  styleUrl: './game-review-list.component.scss'
})
export class GameReviewListComponent {

  @Input() reviews: Array<Review> | undefined;

  constructor(private reviewService: ReviewService) {}

  public canDelete(review: Review): boolean {
    return true;
  }

  public onDelete(review: Review): void {
    this.reviewService.deleteReview(review.id_review).subscribe(() => {
      console.log('Review deleted');
    })
  }

}
