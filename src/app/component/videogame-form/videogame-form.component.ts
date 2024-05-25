import { Component } from '@angular/core';
import {MatOption} from "@angular/material/autocomplete";
import {MatFormField, MatSelect} from "@angular/material/select";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-videogame-form',
  standalone: true,
  imports: [
    MatOption,
    MatSelect,
    MatFormField,
    ReactiveFormsModule,
    MatCard,
    MatCardTitle,
    MatCardContent,
    MatButton,
    MatInput
  ],
  templateUrl: './videogame-form.component.html',
  styleUrl: './videogame-form.component.scss'
})
export class VideogameFormComponent {
  publishers: Array<any> = [];
  developers: Array<any> = [];
  esrbs: Array<any> = [];
  platforms: Array<any> = [];
  licenses: Array<any> = [];
  form: FormGroup = new FormGroup({});

  constructor() {
    this.form = new FormGroup({
      title: new FormControl(''),
      imageUrl: new FormControl(''),
      description: new FormControl(''),
      publisher: new FormControl(''),
      developer: new FormControl(''),
      esrb: new FormControl(''),
      platform: new FormControl(''),
      license: new FormControl(''),
      cover: new FormControl(''),
      trailer: new FormControl(''),
      website: new FormControl(''),
    });
  }


  onSubmit() {

  }
}
