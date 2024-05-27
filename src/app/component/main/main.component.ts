import {Component, NgZone, Signal, signal, WritableSignal} from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet} from "@angular/router";
import {MatButtonModule} from '@angular/material/button';
import {MatDrawerContainer, MatSidenavModule} from '@angular/material/sidenav';
import 'zone.js';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {routes} from "../../app.routes";

import {MatListItem, MatNavList} from "@angular/material/list";
import {SigninComponent} from "../signin/signin.component";
import {StorageService} from "../../service/storage.service";
import {Observable} from "rxjs";
import {AsyncPipe} from "@angular/common";


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    MatDrawerContainer, MatSidenavModule, MatButtonModule, MatIcon, MatIconModule, MatNavList, MatListItem, SigninComponent, RouterOutlet, RouterModule, RouterLink, RouterLinkActive, AsyncPipe,

  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})

export class MainComponent {

  userName: WritableSignal<string> = signal('');
  userEmail: WritableSignal<string | undefined> = signal('');
  showFiller: WritableSignal<boolean> = signal(false);
  userAvatar: WritableSignal<string | null> = signal(null);

  isAdmin$: Observable<boolean> = this.auth.isAdmin();

  constructor(private auth: AuthService, private router: Router, private ls: StorageService) {
    this.auth.currentUser.subscribe(user => {
      if ( this.ls?.get('sb-jzfegpsbaxtsanqvzcid-auth-token') ) {
        this.userName.set(this.ls?.get('sb-jzfegpsbaxtsanqvzcid-auth-token').user?.user_metadata?.['user_name']);
        this.userAvatar.set(this.ls?.get('sb-jzfegpsbaxtsanqvzcid-auth-token').user?.user_metadata?.['avatar_url']);
        this.userEmail.set(this.ls?.get('sb-jzfegpsbaxtsanqvzcid-auth-token').user?.email);
      } else {
        this.userName.set(user?.user_metadata?.['user_name']);
        this.userAvatar.set(user?.user_metadata?.['avatar_url']);
        this.userEmail.set(user?.email);
      }
    });
  }

  navigateTo(route: string): void {
    this.router.navigate([route])
  }

  signOut(): void {
    this.auth.signOut();
  }

}
