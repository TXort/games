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
