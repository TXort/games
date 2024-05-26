import {IRawCompany} from "../interfaces/rawCompany.interface";

export class Company {
  id_company: number;
  name: string;
  founding_year: number;

  constructor(company: IRawCompany) {
    this.id_company = company.id_company;
    this.name = company.name;
    this.founding_year = company.founding_year;
  }
}
