import {IRawCompany} from "./rawCompany.interface";
import {IRawLicense} from "./rawLicense.interface";
import {IRawEsrbRating} from "./rawEsrbRating.interface";

export interface IRawVideoGameForm {
  publishers: Array<IRawCompany>;
  developers: Array<IRawCompany>;
  licences: Array<IRawLicense>;
  esrbs: Array<IRawEsrbRating>;
}
