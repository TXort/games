import { FormBuilder } from '@angular/forms';
import { VideogameFormComponent } from './videogame-form.component';

describe('VideogameFormComponent', () => {
  let component: VideogameFormComponent;

  beforeEach(() => {
    component = new VideogameFormComponent(new FormBuilder());
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be invalid when a required field is empty', () => {
    component.reviewFormGroup.controls['title'].setValue('');
    component.reviewFormGroup.controls['imageUrl'].setValue('');
    component.reviewFormGroup.controls['description'].setValue('');
    component.reviewFormGroup.controls['publisher'].setValue('');
    component.reviewFormGroup.controls['developer'].setValue('');
    component.reviewFormGroup.controls['esrb'].setValue('');
    component.reviewFormGroup.controls['license'].setValue('');
    expect(component.reviewFormGroup.valid).toBeFalsy();
  });

  it('should be invalid when a image is not provided', () => {
    component.reviewFormGroup.controls['title'].setValue('Half-Life');
    component.reviewFormGroup.controls['imageUrl'].setValue('This is not an image');
    component.reviewFormGroup.controls['description'].setValue('Bla bla');
    component.reviewFormGroup.controls['publisher'].setValue('1');
    component.reviewFormGroup.controls['developer'].setValue('1');
    component.reviewFormGroup.controls['esrb'].setValue('1');
    component.reviewFormGroup.controls['license'].setValue('1');
    expect(component.reviewFormGroup.valid).toBeFalsy();
  });

  it('should be invalid when a image is not provided', () => {
    component.reviewFormGroup.controls['title'].setValue('Half-Life');
    component.reviewFormGroup.controls['imageUrl'].setValue('https://cdn.mobygames.com/455b871a-abb9-11ed-aecf-02420a000198.webp');
    component.reviewFormGroup.controls['description'].setValue('Bla bla');
    component.reviewFormGroup.controls['publisher'].setValue('1');
    component.reviewFormGroup.controls['developer'].setValue('1');
    component.reviewFormGroup.controls['esrb'].setValue('1');
    component.reviewFormGroup.controls['license'].setValue('1');
    expect(component.reviewFormGroup.valid).toBeTruthy();
  });
});
