import {Component, Input} from '@angular/core';
import {Review} from "../../models/review.model";
import {ReviewService} from "../../service/review.service";
import {MatCard} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {MatMenu, MatMenuTrigger} from "@angular/material/menu";
import { DomSanitizer } from '@angular/platform-browser'
import {StorageService} from "../../service/storage.service";

@Component({
  selector: 'app-game-review-list',
  standalone: true,
  imports: [
    MatCard,
    MatIcon,
    MatMenu,
    MatMenuTrigger,
  ],
  templateUrl: './game-review-list.component.html',
  styleUrl: './game-review-list.component.scss'
})
export class GameReviewListComponent {

  @Input() reviews: Array<Review> | undefined;

  constructor(private reviewService: ReviewService, protected domSanitizer: DomSanitizer, private ls: StorageService) {

  }

  public canDelete(review: Review): boolean {
    return this.ls.getUserNameOrEmail() === review.user_email || this.ls.getUserNameOrEmail() === JSON.parse(review.user_name);
  }

  public onDelete(review: Review): void {
    this.reviewService.deleteReview(review.id_review).subscribe(() => {
      this.reviews = this.reviews?.filter(r => r.id_review !== review.id_review);
    })
  }


  protected readonly JSON = JSON;
}
