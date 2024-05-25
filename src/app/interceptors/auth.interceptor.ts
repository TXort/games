import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../../environments/environment.development";
import {StorageService} from "../service/storage.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private ls: StorageService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (this.ls.get('sb-jzfegpsbaxtsanqvzcid-auth-token')) {

      let access_token: string | null = this.ls?.get('sb-jzfegpsbaxtsanqvzcid-auth-token').access_token;

      request = request.clone({
        setHeaders: {
          apikey: environment.supabase.key,
          Authorization: `Bearer ${access_token}`
        }
      });
    } else
      request = request.clone({
        setHeaders: {
          apikey: environment.supabase.key
        }
      });

    return next.handle(request);
  }
}
