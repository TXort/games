import { Component } from '@angular/core';
import {VideogameFormComponent} from "../../component/videogame-form/videogame-form.component";

@Component({
  selector: 'app-admin-panel',
  standalone: true,
  imports: [
    VideogameFormComponent
  ],
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.css'
})
export class AdminPanelComponent {

}
