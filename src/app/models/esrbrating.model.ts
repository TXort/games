import { IRawEsrbRating } from '../interfaces/rawEsrbRating.interface';

export class EsrbRating implements IRawEsrbRating {
  id_esrb: number;
  esrb_rating: string;

  constructor(esrbRating: IRawEsrbRating) {
    this.id_esrb = esrbRating.id_esrb;
    this.esrb_rating = esrbRating.esrb_rating;
  }
}
