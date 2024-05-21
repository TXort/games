
import { IRawVideoGame } from "../interfaces/rawVideoGame.interface";

export class VideoGame implements IRawVideoGame {
  id_videogame: number;
  title: string;
  description: string;
  game_picture_url: string;
  id_esrb: number;
  id_license: number;

  constructor(videoGame: IRawVideoGame) {
    this.id_videogame = videoGame.id_videogame;
    this.title = videoGame.title;
    this.description = videoGame.description;
    this.game_picture_url = videoGame.game_picture_url;
    this.id_esrb = videoGame.id_esrb;
    this.id_license = videoGame.id_license;
  }
}
