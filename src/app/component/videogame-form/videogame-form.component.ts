import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatOption} from "@angular/material/autocomplete";
import {MatError, MatFormField, MatSelect} from "@angular/material/select";
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {MatInput} from "@angular/material/input";
import {Company} from "../../models/company.model";
import {EsrbRating} from "../../models/esrbrating.model";
import {License} from "../../models/license.model";
import {IRawReviewSubmission} from "../../interfaces/rawReview.interface";
import {VideoGameForm} from "../../models/videogameform.model";
import {IRawVideoGameSubmission} from "../../interfaces/rawVideoGame.interface";

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
    MatInput,
    MatError
  ],
  templateUrl: './videogame-form.component.html',
  styleUrl: './videogame-form.component.scss'
})
export class VideogameFormComponent {

  @Input() publishers: Array<Company> = [];
  @Input() developers: Array<Company> = [];
  @Input() esrbs: Array<EsrbRating> = [];
  @Input() licenses: Array<License> = [];


  reviewFormGroup: FormGroup = this.fb.group({
      title: ['', [Validators.required]],
      imageUrl: ['', [Validators.required, Validators.pattern('https?://.+')]],
      description: [''],
      publisher: ['', [Validators.required]],
      developer: ['', [Validators.required]],
      esrb: ['', [Validators.required]],
      license: ['', [Validators.required]]
  })

  @Output() submit: EventEmitter<IRawVideoGameSubmission> = new EventEmitter();

  constructor(private fb: FormBuilder) {

  }

  onSubmit(): void {
    const videoGameForm: VideoGameForm = new VideoGameForm({
      publishers: this.publishers,
      developers: this.developers,
      licences: this.licenses,
      esrbs: this.esrbs
    });

    const videoGameSubmission: IRawVideoGameSubmission = {
      title_in: this.reviewFormGroup.get('title')?.value,
      game_picture_url_in: this.reviewFormGroup.get('imageUrl')?.value,
      description_in: this.reviewFormGroup.get('description')?.value || '',
      id_publisher: this.reviewFormGroup.get('publisher')?.value.id_company,
      id_developer: this.reviewFormGroup.get('developer')?.value.id_company,
      id_esrb_in: this.reviewFormGroup.get('esrb')?.value.id_esrb,
      id_license_in: this.reviewFormGroup.get('license')?.value.id_license
    };

    if (!videoGameSubmission.title_in
      || !videoGameSubmission.game_picture_url_in
      || !videoGameSubmission.id_publisher
      || !videoGameSubmission.id_developer
      || !videoGameSubmission.id_esrb_in
      || !videoGameSubmission.id_license_in
    ) {
      return;
    }

    this.submit.emit(videoGameSubmission);
    this.reviewFormGroup.reset();
  }
}
