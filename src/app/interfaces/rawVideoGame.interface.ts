
export interface IRawVideoGame {
  id_videogame: number;
  title: string;
  description: string;
  game_picture_url: string;
  esrb_rating: string;
  license: string;
  num_of_reviews: number;
  rating: number | undefined;
}

export interface IRawVideoGameSubmission {
  description_in: string;
  game_picture_url_in: string;
  id_developer: number;
  id_esrb_in: number;
  id_license_in: number;
  id_publisher: number;
  title_in: string;
}
