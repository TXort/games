
import { IRawReview, IRawReviewSubmission } from "../interfaces/rawReview.interface";

export class Review implements IRawReview {
  id_review: number;
  title: string;
  content: string;
  rating: number;
  creation_datetime: Date;
  id_user: number;
  avatar_url: string;
  user_name: string;
  user_email: string;

  constructor(review: IRawReview) {
    this.id_review = review.id_review;
    this.title = review.title;
    this.content = review.content;
    this.rating = review.rating;
    this.creation_datetime = review.creation_datetime;
    this.id_user = review.id_user;
    this.avatar_url = review.avatar_url;
    this.user_name = review.user_name;
    this.user_email = review.user_email;
  }
}


export class ReviewSubmission implements IRawReviewSubmission {
  content_in: string;
  id_videogame_in: number;
  rating_in: number;
  title_in: string;

  constructor(review: IRawReviewSubmission) {
    this.content_in = review.content_in;
    this.id_videogame_in = review.id_videogame_in;
    this.rating_in = review.rating_in;
    this.title_in = review.title_in;
  }
}
