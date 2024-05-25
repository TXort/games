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


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    MatDrawerContainer, MatSidenavModule, MatButtonModule, MatIcon, MatIconModule, MatNavList, MatListItem, SigninComponent, RouterOutlet, RouterModule, RouterLink, RouterLinkActive,

  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})

export class MainComponent {

  userName: WritableSignal<string> = signal('');
  userEmail: WritableSignal<string | undefined> = signal('');
  showFiller: WritableSignal<boolean> = signal(false);
  userAvatar: WritableSignal<string | null> = signal(null);

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
    console.log(routes);
  }

  navigateTo(route: string) {
    this.router.navigate([route]).then(r => console.log(r))
  }

  signOut() {
    this.auth.signOut();
    //this.router.navigate(['/signin']);
  }

  toggleFiller() {
    this.showFiller.set(!this.showFiller());
  }

  fixName(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1).replace(/-/g, ' ');
  }

  filterRoutes(str: string): any {

    let whiteList: Array<string> = ['signin'];

    return !whiteList.includes(str);
  }

  protected readonly routes = routes;
}
