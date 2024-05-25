export interface IRawReview {
  id_review: number;
  title: string;
  content: string;
  rating: number;
  creation_datetime: Date;
  id_user: number;
  avatar_url: string;
  user_name: string;
  user_email: string;
}

export interface IRawReviewSubmission {
  content_in: string;
  id_videogame_in: number;
  rating_in: number;
  title_in: string;
}
