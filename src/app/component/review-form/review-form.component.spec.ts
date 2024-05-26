import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import {ReviewFormComponent} from "./review-form.component";

describe('ReviewFormComponent', () => {
  let component: ReviewFormComponent;
  let fixture: ComponentFixture<ReviewFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ReviewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be invalid when a required field is empty', () => {
    component.reviewFormGroup.controls['comment'].setValue('');
    component.reviewFormGroup.controls['title'].setValue('');
    expect(component.reviewFormGroup.valid).toBeFalsy();
  });

  it('should be invalid there is a forbidden word', () => {
    component.reviewFormGroup.controls['comment'].setValue('Ovo je glupa igrica!');
    component.reviewFormGroup.controls['title'].setValue('');
    expect(component.reviewFormGroup.valid).toBeFalsy();
  });

  it('should be valid when all fields are filled correctly', () => {
    component.reviewFormGroup.controls['comment'].setValue('Test comment');
    component.reviewFormGroup.controls['title'].setValue('Test title');
    component.reviewFormGroup.controls['rating'].setValue('5');
    expect(component.reviewFormGroup.valid).toBeTruthy();
  });
});
