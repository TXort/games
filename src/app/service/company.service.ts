import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Company} from "../models/company.model";
import {environment} from "../../environments/environment.development";
import {IRawCompany} from "../interfaces/rawCompany.interface";

@Injectable({
  providedIn: 'root'
})

export class CompanyService {

  constructor(private http: HttpClient) { }

  public getPublishers(): Observable<Array<Company>> {
    return this.http.get<Array<IRawCompany>>(environment.supabase.url + '/rest/v1/rpc/get_publishers').pipe(
      map((response: Array<IRawCompany>) => {
        console.log(response);
        return response.map((company: IRawCompany) => new Company(company));
      }
      )
    );
  }

  public getDevelopers(): Observable<Array<Company>> {
    return this.http.get<Array<IRawCompany>>(environment.supabase.url + '/rest/v1/rpc/get_developers').pipe(
      map((response: Array<IRawCompany>) => {
        console.log(response);
        return response.map((company: IRawCompany) => new Company(company));
      }
      )
    );
  }

}
