import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable} from 'rxjs';
import { VideoGame } from '../models/videogame.model';
import { IRawVideoGame } from '../interfaces/rawVideoGame.interface';
import { SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})


export class VideogameService {

  constructor(private http: HttpClient) { }

  public getVideoGames(): Observable<Array<VideoGame>> {
    return this.http.get<Array<IRawVideoGame>>(environment.supabase.url + '/rest/v1/videogame').pipe(
      map((response: Array<IRawVideoGame>) => {
        return response.map((videoGame: IRawVideoGame) => new VideoGame(videoGame));
      }
      )
    );
  }

}
