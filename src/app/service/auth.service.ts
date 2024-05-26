import { Injectable } from '@angular/core';
import { SupabaseClient, User, createClient } from '@supabase/supabase-js';
import {BehaviorSubject, map, Observable} from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Router } from '@angular/router';
import {StorageService} from "./storage.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user = new BehaviorSubject<User | null>(null);
  private supabase!: SupabaseClient;

  constructor(private http: HttpClient,
    private router: Router, private ls: StorageService) {
    this.supabase = createClient(
      environment.supabase.url,
      environment.supabase.key
    );

    this.supabase.auth.onAuthStateChange((event, session) => {


      if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') {
        this.user.next(session!.user);
        this.router.navigate(['/']);
      } else {
        this.user.next(null);
      }
    });
  }

  async signInWithGithub() {
    await this.supabase.auth.signInWithOAuth({
      provider: 'github',
    });
  }

  async signOut() {
    await this.supabase.auth.signOut().then((res) => {
      console.log(res);
    });
    this.ls.remove('sb-jzfegpsbaxtsanqvzcid-auth-token');
  }

  get currentUser() {
    return this.user.asObservable();
  }

  get getSession() {
    return this.supabase.auth.getSession()
  }

  isAdmin(): Observable<boolean> {
    return this.http.get<boolean>(environment.supabase.url + '/rest/v1/rpc/is_admin').pipe(
      map((response: boolean) => {
        return response;
      }
      )
    );
  }

}
