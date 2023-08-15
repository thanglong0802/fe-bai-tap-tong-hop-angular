import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  id: number | undefined;
  userName: string | undefined;
  email: string | undefined;
  password: string | undefined;
  role: string | undefined;
  createDate: Date | undefined;
  lastUpdate: Date | undefined;
  isDelete: boolean | undefined;
}
