import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent {
  constructor() {
    this.id = 0;
    this.firstName = '';
    this.lastName = '';
    this.email = '';
  }

  id: number;
  firstName: string;
  lastName: string;
  email: string | undefined;
}
