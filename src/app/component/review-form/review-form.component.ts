import {Component, EventEmitter, Output} from '@angular/core';
import {IRawReview, IRawReviewSubmission} from "../../interfaces/rawReview.interface";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {commentValidator} from "../../validators/comment.validator";
import {MatError, MatFormField, MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatButton} from "@angular/material/button";
import {MatCard} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";

@Component({
  selector: 'app-review-form',
  standalone: true,
  imports: [
    MatFormField,
    ReactiveFormsModule,
    MatIcon,
    MatButton,
    MatCard,
    MatLabel,
    MatError,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './review-form.component.html',
  styleUrl: './review-form.component.scss'
})
export class ReviewFormComponent {
  @Output() submit: EventEmitter<IRawReviewSubmission> = new EventEmitter();

  private rating: number = 0;
  private starCount: number  = 5;
  public ratingArr: Array<boolean> = [];

  constructor(private fb: FormBuilder) {
    this.ratingArr = Array(this.starCount).fill(false);
  }

  public reviewFormGroup: FormGroup = this.fb.group({
    comment: ['', [Validators.required, commentValidator]],
    rating: [''],
    title: ['', [Validators.required, commentValidator]]
  });

  public getStar(i: number): string {
    if (this.rating >= i + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }

  public onStarClick(i: number): void {
    this.rating = i + 1;
  }

  public onSubmit(): void {
    this.reviewFormGroup.patchValue({ rating: `${this.rating}` });
    this.submit.emit(this.reviewFormGroup.value);
    this.reviewFormGroup.reset( { rating: '', comment: '', title: '' });
  }


}
