import { Component } from '@angular/core';
import { UsersWrapper } from './users-wrapper/users-wrapper';
@Component({
  selector: 'app-root',
  imports: [UsersWrapper],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'users-cards';
}
