import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface userTypes {
  profilePicture: string;
  username: string;
  email: string;
  phone: string;
  birthdate: string;
  role: string;
}
@Component({
  selector: 'app-user-cards',
  imports: [CommonModule],
  templateUrl: './user-cards.html',
  styleUrl: './user-cards.scss',
})
export class UserCards {
  @Input() users: userTypes[] = [];
}
