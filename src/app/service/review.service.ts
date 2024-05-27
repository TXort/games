import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Review, ReviewSubmission} from "../models/review.model";
import {map, Observable} from "rxjs";
import {IRawReview} from "../interfaces/rawReview.interface";
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http: HttpClient) { }

  public getReviewsOfVideoGame(id_videogame_in: number): Observable<Array<Review>> {
    return this.http.get<Array<IRawReview>>(environment.supabase.url + '/rest/v1/rpc/get_reviews_of_videogame?id_videogame_in=' + id_videogame_in).pipe(
      map((response: Array<IRawReview>) => {
        console.log(response);
        return response.map((review: IRawReview) => new Review(review));
      }
      )
    );
  }

  public submitVideoGameReview(review: ReviewSubmission): Observable<any> {
    return this.http.post(environment.supabase.url + '/rest/v1/rpc/insert_review', review);
  }

  public deleteReview(id_review: number): Observable<any> {
    return this.http.post(environment.supabase.url + '/rest/v1/rpc/delete_review', {id_review_in: id_review.toString()});
  }

}
