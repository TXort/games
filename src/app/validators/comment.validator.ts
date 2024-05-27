import {FormControl, FormGroup, ValidationErrors} from "@angular/forms";

export function commentValidator(control: FormControl) : ValidationErrors | null {

  const badWords: Array<String> = ['glup'];

  if (badWords.some(badWord => control.value.includes(badWord))) {
    return { comment: 'bad word detected' };
  }
  return null;
}
