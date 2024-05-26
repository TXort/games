import {IRawLicense} from "../interfaces/rawLicense.interface";

export class License {
  id_license: number;
  license: string;

  constructor(license: IRawLicense) {
    this.id_license = license.id_license;
    this.license = license.license;
  }
}
