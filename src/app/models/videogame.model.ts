
import { IRawVideoGame } from "../interfaces/rawVideoGame.interface";

export class VideoGame implements IRawVideoGame {
  id_videogame: number;
  title: string;
  description: string;
  game_picture_url: string;
  esrb_rating: string;
  license: string;
  num_of_reviews: number;
  rating: number | undefined;

  constructor(videoGame: IRawVideoGame) {
    this.id_videogame = videoGame.id_videogame;
    this.title = videoGame.title;
    this.description = videoGame.description;
    this.game_picture_url = videoGame.game_picture_url;
    this.esrb_rating = videoGame.esrb_rating;
    this.license = videoGame.license;
    this.num_of_reviews = videoGame.num_of_reviews;
    this.rating = videoGame.rating;
  }
}
