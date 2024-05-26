import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {from, map, Observable} from 'rxjs';
import {VideoGame, VideoGameSubmission} from '../models/videogame.model';
import { IRawVideoGame } from '../interfaces/rawVideoGame.interface';
import { SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment.development';
import {AuthService} from "./auth.service";
import {EsrbRating} from "../models/esrbrating.model";
import {IRawEsrbRating} from "../interfaces/rawEsrbRating.interface";
import {License} from "../models/license.model";
import {IRawLicense} from "../interfaces/rawLicense.interface";

@Injectable({
  providedIn: 'root'
})


export class VideogameService {

  constructor(private http: HttpClient) { }

  public getVideoGames(): Observable<Array<VideoGame>> {
     return this.http.get<Array<IRawVideoGame>>(environment.supabase.url + '/rest/v1/rpc/get_videogames').pipe(
       map((response: Array<IRawVideoGame>) => {
         console.log(response);
         return response.map((videoGame: IRawVideoGame) => new VideoGame(videoGame));
       }
       )
     );
   }

  public getVideoGamesByTitle(title: string): Observable<Array<VideoGame>> {
    return this.http.get<Array<IRawVideoGame>>(environment.supabase.url + '/rest/v1/rpc/search_videogames_by_title?title_in=' + title).pipe(
      map((response: Array<IRawVideoGame>) => {
        console.log(response);
        return response.map((videoGame: IRawVideoGame) => new VideoGame(videoGame));
      }
      )
    );
  }

  public getVideoGameById(id_videogame_in: number): Observable<VideoGame> {
    return this.http.get<Array<IRawVideoGame>>(environment.supabase.url + '/rest/v1/rpc/get_videogame_by_id?id_videogame_in=' + id_videogame_in).pipe(
      map((response: Array<IRawVideoGame>) => {
        return new VideoGame(response[0]);
      }
      )
    );
  }

  public submitVideoGame(videoGameSubmission: VideoGameSubmission): Observable<any> {
    return this.http.post(environment.supabase.url + '/rest/v1/rpc/insert_videogame', videoGameSubmission);
  }

  public getEsrbRatings(): Observable<Array<EsrbRating>> {
    return this.http.get<Array<IRawEsrbRating>>(environment.supabase.url + '/rest/v1/rpc/get_esrb_ratings').pipe(
      map((response: Array<IRawEsrbRating>) => {
          console.log(response);
          return response.map((esrbRating: IRawEsrbRating) => new EsrbRating(esrbRating));
        }
      )
    );
  }

  public getLicenses(): Observable<Array<License>> {
    return this.http.get<Array<IRawLicense>>(environment.supabase.url + '/rest/v1/rpc/get_licenses').pipe(
      map((response: Array<IRawLicense>) => {
          console.log(response);
          return response.map((license: IRawLicense) => new License(license));
        }
      )
    );
  }




}
