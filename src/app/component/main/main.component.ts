import {Component, NgZone, Signal, signal, WritableSignal} from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {Router, RouterOutlet} from "@angular/router";
import {MatButtonModule} from '@angular/material/button';
import {MatDrawerContainer, MatSidenavModule} from '@angular/material/sidenav';
import 'zone.js';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {routes} from "../../app.routes";

import {MatListItem, MatNavList} from "@angular/material/list";
import {SigninComponent} from "../signin/signin.component";


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    MatDrawerContainer, MatSidenavModule, MatButtonModule, MatIcon, MatIconModule, MatNavList, MatListItem, SigninComponent, RouterOutlet
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})

export class MainComponent {

  userName: WritableSignal<string> = signal('');
  showFiller: WritableSignal<boolean> = signal(false);


  constructor(private auth: AuthService, private router: Router) {
    this.auth.currentUser.subscribe(user => {
      this.userName.set(user?.user_metadata?.['user_name']);
    });
    console.log(routes);
  }

  navigateTo(route: string) {
    this.router.navigate([route]).then(r => console.log(r))
  }

  signOut() {
    this.auth.signOut();
    this.router.navigate(['/signin']);
  }

  toggleFiller() {
    this.showFiller.set(!this.showFiller());
  }

  capitalizeFirstLetter(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  filterRoutes(str: string): any {

    let whiteList: Array<string> = ['signin'];

    return !whiteList.includes(str);
  }

  protected readonly routes = routes;
}
