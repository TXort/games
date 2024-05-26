import {IRawVideoGameForm} from "../interfaces/rawVideoGameForm.interface";
import {Company} from "./company.model";
import {License} from "./license.model";
import {EsrbRating} from "./esrbrating.model";

export class VideoGameForm implements IRawVideoGameForm {
  publishers: Array<Company>;
  developers: Array<Company>;
  licences: Array<License>;
  esrbs: Array<EsrbRating>;

  constructor(videoGameForm: IRawVideoGameForm) {
    this.publishers = videoGameForm.publishers;
    this.developers = videoGameForm.developers;
    this.licences = videoGameForm.licences;
    this.esrbs = videoGameForm.esrbs;
  }
}
