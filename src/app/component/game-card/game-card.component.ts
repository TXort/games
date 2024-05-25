import {Component, Input} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatCard} from "@angular/material/card";

@Component({
  selector: 'app-game-card',
  standalone: true,
  imports: [
    MatIcon,
    MatCard
  ],
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.scss'
})


export class GameCardComponent {

  @Input() title: string | undefined;
  @Input() description: string | undefined;
  @Input() game_picture_url: string | undefined;
  @Input() esrb: string | undefined;
  @Input() license: string | undefined;
  @Input() avg_rating: number | undefined;

  protected readonly Math = Math;
}
