import {Component, Input} from '@angular/core';
import {VideoGame} from "../../models/videogame.model";
import {MatCard} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-game-details',
  standalone: true,
  imports: [
    MatCard,
    MatIcon
  ],
  templateUrl: './game-details.component.html',
  styleUrl: './game-details.component.scss'
})
export class GameDetailsComponent {
  @Input() game: VideoGame | undefined;

  constructor() {
    console.log('GameDetailsComponent');
    console.log(this.game);
  }

  protected readonly Math = Math;
}
