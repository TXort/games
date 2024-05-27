import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css',
})
export class SigninComponent {
  constructor(private auth: AuthService) {}

  async handleAuth(): Promise<void> {
    const response = await this.auth.signInWithGithub();
  }
}
