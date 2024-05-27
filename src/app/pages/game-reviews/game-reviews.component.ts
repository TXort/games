import {Component, signal, Signal, WritableSignal} from '@angular/core';
import {BehaviorSubject, map, Observable, switchMap} from "rxjs";
import {Review, ReviewSubmission} from "../../models/review.model";
import {VideoGame} from "../../models/videogame.model";
import {ActivatedRoute} from "@angular/router";
import {VideogameService} from "../../service/videogame.service";
import {ReviewService} from "../../service/review.service";
import {GameDetailsComponent} from "../../component/game-details/game-details.component";
import {ReviewFormComponent} from "../../component/review-form/review-form.component";
import {GameReviewListComponent} from "../../component/game-review-list/game-review-list.component";
import {IRawReview, IRawReviewSubmission} from "../../interfaces/rawReview.interface";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-game-reviews',
  standalone: true,
  imports: [
    GameDetailsComponent,
    ReviewFormComponent,
    GameReviewListComponent,
    AsyncPipe
  ],
  templateUrl: './game-reviews.component.html',
  styleUrl: './game-reviews.component.css'
})
export class GameReviewsComponent {

  id: WritableSignal<number> = signal(-1);
  refreshReviews$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  game$: Observable<VideoGame>;
  reviews$: Observable<Array<Review> | null>;

  constructor(private route: ActivatedRoute, private gameService: VideogameService, private reviewService: ReviewService) {
    console.log('GameReviewsComponent');
    this.route.params.subscribe(params => {
      const tempId = params['id'];
      if (tempId) {
        this.id.set(tempId);
      }
    });
    this.game$ = this.gameService.getVideoGameById(this.id());
    this.reviews$ = this.refreshReviews$.pipe(
      switchMap(() => this.reviewService.getReviewsOfVideoGame(this.id()))
    );
  }

  public onSubmit(reviewData: any): void {
    const review: ReviewSubmission = {
      title_in: reviewData.title,
      content_in: reviewData.comment,
      rating_in: reviewData.rating,
      id_videogame_in: this.id()
    }
    this.reviewService.submitVideoGameReview(review).subscribe(() => {
      this.refreshReviews$.next(true);
    });
  }


}
