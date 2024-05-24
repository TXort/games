
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
