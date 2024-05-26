
import {IRawVideoGame, IRawVideoGameSubmission} from "../interfaces/rawVideoGame.interface";

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

export class VideoGameSubmission implements IRawVideoGameSubmission {
  description_in: string;
  game_picture_url_in: string;
  id_developer: number;
  id_esrb_in: number;
  id_license_in: number;
  id_publisher: number;
  title_in: string;

  constructor(videoGame: IRawVideoGameSubmission) {
    this.description_in = videoGame.description_in;
    this.game_picture_url_in = videoGame.game_picture_url_in;
    this.id_developer = videoGame.id_developer;
    this.id_esrb_in = videoGame.id_esrb_in;
    this.id_license_in = videoGame.id_license_in;
    this.id_publisher = videoGame.id_publisher;
    this.title_in = videoGame.title_in;
  }
}
